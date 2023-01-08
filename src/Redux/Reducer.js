import { ADD_TODO, TOGGLE_STATUS, REMOVE_TODO } from "./actionType";

//initial State
const initialState = {
  todos: [
    {
      id: 1,
      text: "Demo todo item",
      complete: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            complete: false,
          },
        ],
      };
    case TOGGLE_STATUS:
      var todos = state.todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, complete: !todo.complete }
          : todo;
      });
      return {
        ...state,
        todos,
      };

    case REMOVE_TODO:
      var todos = state.todos.filter((todo) => {
        return todo.id != action.id;
      });

      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
};

export default reducer;
