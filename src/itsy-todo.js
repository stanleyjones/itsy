import BaseElement from "/lib/base-element.js";
import { toggleTodo } from "/src/itsy-store.js";

export default class ItsyTodo extends BaseElement {
  attributes = ["id", "name", "done"];
  css = `
    .itsy-todo {
      list-style: none;
      line-height: 2rem;
    }
    .itsy-todo input {
      position: relative;
      top: 0.5rem;
      margin-right: 1rem;
      appearance: none;
      background: var(--color-fg);
      border: none;
      border-radius: 2px;
      height: 1.5rem;
      width: 1.5rem;
    }
    .itsy-todo input::before {
      position: absolute;
      content: "✔";
      top: -0.5rem;
      font-size: 2rem;
      color: var(--color-bg);
      visibility: hidden;
    }
    .itsy-todo input:checked::before {
      visibility: visible;
    }
  `;

  events = {
    change: (event) => toggleTodo(event, this.attrs.id),
  };

  render() {
    const { name, done } = this.attrs;
    return `
      <li class="itsy-todo">
        <input type="checkbox" ${done ? "checked " : ""}/>
        ${name}
      </li>
    `;
  }
}
