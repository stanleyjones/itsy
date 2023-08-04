import BaseElement from "/lib/base-element.js";

customElements.define(
  "itsy-app",
  class extends BaseElement {
    css = `
      .itsy-app {
        min-height: 100vh;
        color: var(--color-fg);
        background-color: var(--color-bg);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .itsy-app > * {
        width: 100%;
        min-width: 280px;
        max-width: 800px;
      }
    `;

    render() {
      return `
        <main class="itsy-app">
          <itsy-header></itsy-header>
          <itsy-todos></itsy-todos>
          <itsy-footer></itsy-footer>
        </main>
      `;
    }
  }
);
