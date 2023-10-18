globalThis.__DEBUG_BASE_ELEMENT__ = false;

export default class BaseElement extends HTMLElement {
  attributes = [];
  events = {};
  css = "";

  connectedCallback() {
    if (__DEBUG_BASE_ELEMENT__) {
      console.debug("connected");
    }
    this.update();
    Object.entries(this.events).forEach(([type, listener]) =>
      this.addEventListener(type, listener)
    );
  }

  disconnectedCallback() {
    if (__DEBUG_BASE_ELEMENT__) {
      console.debug("disconnected");
    }
    Object.entries(this.events).forEach(([type, listener]) =>
      this.removeEventListener(type, listener)
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (__DEBUG_BASE_ELEMENT__) {
      console.debug("attribute changed:", name, oldValue, newValue);
    }
    this.update();
  }

  static get observedAttributes() {
    return this.attributes;
  }

  get attrs() {
    return this.attributes.reduce((attrs, name) => {
      let attr = this.getAttribute(name);
      try {
        attr = JSON.parse(attr);
      } catch { }
      return { ...attrs, [name]: attr };
    }, {});
  }

  update() {
    if (__DEBUG_BASE_ELEMENT__) {
      console.debug("render");
    }
    let innerHTML = this.css.length ? `<style>${this.css}</style>` : "";
    innerHTML += this.render();
    this.innerHTML = innerHTML;
  }
}
