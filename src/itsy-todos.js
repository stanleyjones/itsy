import ContainerElement from "/lib/container-element.js";
import store from "/src/itsy-store.js";

customElements.define(
  "itsy-todos",
  class extends ContainerElement {
    props = { todos: [] };
    css = `.itsy-todos { padding: 0; }`;

    constructor() {
      super();
      this.connect(store);
    }

    render() {
      const { todos } = this.props;
      return `
        <ul class="itsy-todos">
          ${todos
          .map(
            ({ id, name, done }) =>
              `<itsy-todo id="${id}" name="${name}" done="${done}"></itsy-todo>`
          )
          .join("")}
        </ul>
      `;
    }
  }
);
