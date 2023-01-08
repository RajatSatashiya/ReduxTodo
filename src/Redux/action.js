import { ADD_TODO, TOGGLE_STATUS, REMOVE_TODO } from "./actionType";

export const addTodo = (id, text) => ({
  type: ADD_TODO,
  payload: {
    id,
    text,
  },
});

export const toggleStatus = (id) => ({
  type: TOGGLE_STATUS,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});
