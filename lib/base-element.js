globalThis.__DEBUG_BASE_ELEMENT__ = false;

export default class BaseElement extends HTMLElement {
  attrs = [];
  props = {};
  events = {};
  css = "";

  connectedCallback() {
    if (__DEBUG_BASE_ELEMENT__) {
      console.debug("connected");
    }
    this.attrs.forEach((attr) => this.setProp(attr, this.getAttribute(attr)));
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

  attributeChangedCallback(name, _, value) {
    if (__DEBUG_BASE_ELEMENT__) {
      console.debug("attr changed:", name);
    }
    this.setProp(name, value);
    this.update();
  }

  static get observedAttributes() {
    return this.attrs;
  }

  setProp(name, value) {
    if (__DEBUG_BASE_ELEMENT__) {
      console.debug("prop changed:", name);
    }
    this.props[name] = value;
    if (this.attrs.includes(name) && this.getAttribute(name) !== value) {
      this.setAttribute(name, value);
    }
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
