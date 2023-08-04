globalThis.__DEBUG_STORE__ = false;

export default function createStore(initState = {}) {
  let state = initState;
  const listeners = new Set();

  const setState = (change, replace = false) => {
    const nextState = typeof change === "function" ? change(state) : change;
    if (!Object.is(state, nextState)) {
      state = replace ? nextState : { ...state, ...nextState };
      listeners.forEach((listener) => listener(state));
    }
    if (__DEBUG_STORE__) {
      console.debug(state);
    }
  };

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { setState, getState, subscribe };
}
