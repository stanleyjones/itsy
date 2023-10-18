import ContainerElement from "/lib/container-element.js";
import store from "/src/itsy-store.js";

export default class ItsyTodos extends ContainerElement {
  attributes = ["todos"];
  css = `.itsy-todos { padding: 0; }`;

  constructor() {
    super();
    this.connect(store);
  }

  render() {
    const { todos } = this.attrs;
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
