import createStore from "/lib/createStore.js";

const INIT_STATE = {
  todos: [],
  nextId: 0,
};

const store = createStore(INIT_STATE);

export const addTodo = (event) =>
  store.setState(({ todos, nextId }) => ({
    todos: [...todos, { id: nextId, name: event.target.value, done: false }],
    nextId: nextId + 1,
  }));

export const toggleTodo = (event, id) =>
  store.setState(({ todos }) => ({
    todos: [
      ...todos.map((todo) =>
        todo.id === JSON.parse(id)
          ? { ...todo, done: event.target.checked }
          : todo
      ),
    ],
  }));

export const updateTodo = (event, id) =>
  store.setState(({ todos }) => ({
    todos: [
      ...todos.map((todo) =>
        todo.id === JSON.parse(id)
          ? { ...todo, name: event.target.value }
          : todo
      ),
    ],
  }));

export const clearTodos = () =>
  store.setState(({ todos }) => ({
    todos: [...todos.filter((todo) => !todo.done)],
  }));

export default store;
