import { assertEq, assertNe } from "./assertion.js";
import { createStore } from "./store.js";

describe("createStore", () => {
  it("should create a store", () => {
    const store = createStore();

    assertNe(typeof store, undefined);
  });

  it("should take an initial state", () => {
    const store = createStore({ foo: true });

    assertEq(store.getState().foo, true);
  });

  it("should change state via set", () => {
    const store = createStore({ foo: true });
    store.setState({ foo: false });

    assertNe(store.getState().foo, true);
  });

  it("should subscribe listeners", () => {
    let foo = true;
    const listener = (state) => (foo = state.foo);
    const store = createStore({ foo });

    store.subscribe(listener);

    store.setState({ foo: false });
    assertEq(foo, false);
  });

  it("should unsubscribe listeners", () => {
    let foo = true;
    const listener = (state) => (foo = state.foo);
    const store = createStore({ foo });

    const unsubscribe = store.subscribe(listener);
    unsubscribe();

    store.setState({ foo: false });
    assertNe(foo, false);
  });
});
