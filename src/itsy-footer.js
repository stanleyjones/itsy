import BaseElement from "./base-element.js";

customElements.define(
  "itsy-footer",
  class extends BaseElement {
    static get observedAttributes() {
      return ["parentId"];
    }

    render() {
      return `<h1>[footer]</h1`;
    }
  }
);
