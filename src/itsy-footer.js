import BaseElement from "/lib/base-element.js";
import { clearTodos } from "/src/itsy-store.js";

customElements.define(
  "itsy-footer",
  class extends BaseElement {
    css = `
      .itsy-footer button {
        border: 1px solid var(--color-fg);
        border-radius: 0.5rem;
        background: var(--color-bg);
        color: var(--color-fg);
        padding: 0.5rem 1rem ;
        opacity: 0.5;
        cursor: pointer;
      }
      .itsy-footer button:hover {
        opacity: 1;
        background: var(--color-destructive);
      }
    `;

    events = {
      click: clearTodos,
    };

    render() {
      return `
        <footer class="itsy-footer">
          <button>Clear done</button>
        </footer>
      `;
    }
  }
);
