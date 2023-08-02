import ContainerElement from "./container-element.js";
import store from "/src/store.js";

customElements.define(
  "itsy-app",
  class extends ContainerElement {
    attrs = ["parent"];
    props = { things: [] };
    css = `p { font-weight: bold}`;

    constructor() {
      super();
      this.connect(store);
      setTimeout(() => store.setState({ things: ["Yep"] }), 3000);
    }

    render() {
      const { things, parent } = this.props;
      return `
        <itsy-header></itsy-header>
        <p>Hack the following things:</p>
        <ul>
          ${things.map((thing) => `<li>${thing}</li>`).join("")}
        </ul>
        <itsy-footer parent=${parent}></itsy-footer>
      `;
    }
  }
);
