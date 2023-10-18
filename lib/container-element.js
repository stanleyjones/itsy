globalThis.__DEBUG_CONTAINER_ELEMENT__ = false;

import BaseElement from "./base-element.js";

export default class ContainerElement extends BaseElement {
  disconnectedCallback() {
    this.__unsubscribe && this.__unsubscribe();
    super.disconnectedCallback();
  }

  connect(store) {
    if (__DEBUG_CONTAINER_ELEMENT__) {
      console.debug("connected to store");
    }
    this.__unsubscribe = store.subscribe(this.mapState.bind(this));
    this.mapState(store.getState());
  }

  mapState(state) {
    if (__DEBUG_CONTAINER_ELEMENT__) {
      console.debug("mapping state");
    }
    this.attributes.forEach((name) => {
      if (Object.hasOwn(state, name)) {
        this.setAttribute(name, JSON.stringify(state[name]));
      }
    });
    this.update();
  }
}
