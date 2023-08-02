import BaseElement from "./base-element.js";

customElements.define(
  "itsy-header",
  class extends BaseElement {
    static get observedAttributes() {
      return ["parentId"];
    }

    render() {
      return `<h1>ITSY</h1`;
    }
  }
);
