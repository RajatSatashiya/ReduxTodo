import { ADD_TODO, TOGGLE_STATUS } from "./actionType";

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
