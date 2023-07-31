import BaseElement from "/src/base-element.js";
import createStore from "/src/store.js";

const store = createStore({ things: ["All", "The", "Things!"] });

customElements.define(
  "itsy-app",
  class extends BaseElement {
    css = `p { font-weight: bold}`;

    constructor() {
      super();
      super.connect(store);
      setTimeout(() => store.setState({ things: ["Yep"] }), 3000);
    }

    static get observedAttributes() {
      return ["things"];
    }

    render() {
      const things = this.getAttribute("things").split(",");
      return `
        <p>Hack the following things:</p>
        <ul>
          ${things.map((thing) => `<itsy-li item="${thing}"></itsy-li>`).join("")}
        </ul>
      `;
    }

    mapState(state) {
      this.setAttribute("things", state.things);
    }
  }
);

customElements.define(
  "itsy-li",
  class extends BaseElement {
    constructor() {
      super();
    }

    static get observedAttributes() {
      return ["item"];
    }

    render() {
      return `<li>${this.getAttribute("item")}</li>`;
    }
  }
);
