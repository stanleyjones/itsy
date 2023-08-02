export default class BaseElement extends HTMLElement {
  attrs = [];
  props = {};
  css = "";

  connectedCallback() {
    console.debug("connected");
    this.attrs.forEach((attr) => this.setProp(attr, this.getAttribute(attr)));
    this.update();
  }

  disconnectedCallback() {
    console.debug("disconnected");
  }

  attributeChangedCallback(name, _, value) {
    console.debug("attr changed:", name);
    this.setProp(name, value);
    this.update();
  }

  static get observedAttributes() {
    return this.attrs;
  }

  setProp(name, value) {
    console.debug("set prop:", name);
    this.props[name] = value;
    if (this.attrs.includes(name) && this.getAttribute(name) !== value) {
      this.setAttribute(name, value);
    }
  }

  update() {
    console.debug("render");
    let innerHTML = this.css.length ? `<style>${this.css}</style>` : "";
    innerHTML += this.render();
    this.innerHTML = innerHTML;
  }
}
