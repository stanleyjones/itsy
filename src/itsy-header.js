import BaseElement from "/lib/base-element.js";
import { addTodo } from "/src/itsy-store.js";

customElements.define(
  "itsy-header",
  class extends BaseElement {
    css = `
      .itsy-header h1, .itsy-header h2 {
        font-weight: 300;
        text-align: center;
      }
      .itsy-header input {
        appearance: none;
        font-size: 1rem;
        border: none;
        border-radius: 0.5rem;
        padding: 1rem;
        height: 1rem;
        width: 100%;
      }
    `;

    events = {
      keyup: (event) => {
        if (event.key === "Enter") {
          addTodo(event);
          event.target.value = "";
        }
      },
    };

    render() {
      return `
        <header class="itsy-header">
          <h1>🕷️🕷️🕷️ itsy 🕷️🕷️🕷️</h1>
          <h2>An itsy-bitsy to-do app</h2>
          <input class="new-todo" placeholder="What needs to be done?" autofocus>
        </header>
      `;
    }
  }
);
