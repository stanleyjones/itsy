export default class BaseElement extends HTMLElement {
  css = "";

  connectedCallback() {
    console.debug("connected");
    this.attachShadow({ mode: "open" });
    if (!this.rendered) {
      this.#update();
    }
  }

  disconnectedCallback() {
    console.debug("disconnected");
    this.__unsubscribe && this.__unsubscribe();
  }

  attributeChangedCallback(name, _oldValue, _newValue) {
    console.debug("attr changed:", name);
    this.#update();
  }

  connect(store) {
    this.__unsubscribe = store.subscribe(() => this.mapState(store.getState()));
    this.mapState(store.getState());
  }

  mapState(state) { }

  #update() {
    console.debug("render");
    this.shadowRoot &&
      (this.shadowRoot.innerHTML = `<style>${this.css}</style>${this.render()}`);
  }
}
