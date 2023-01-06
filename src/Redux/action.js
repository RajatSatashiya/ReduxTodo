import { ADD_TODO } from "./actionType";

export const addTodo = (id, text) => ({
  type: ADD_TODO,
  payload: {
    id,
    text,
  },
});
