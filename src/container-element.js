import BaseElement from "./base-element.js";

export default class ContainerElement extends BaseElement {
  disconnectedCallback() {
    this.__unsubscribe && this.__unsubscribe();
    super.disconnectedCallback();
  }

  connect(store) {
    this.__unsubscribe = store.subscribe(this.mapState.bind(this));
    this.mapState(store.getState());
  }

  mapState(state) {
    Object.keys(this.props).forEach((key) => {
      if (Object.hasOwn(state, key)) {
        this.setProp(key, state[key]);
      }
    });
    this.update();
  }
}
