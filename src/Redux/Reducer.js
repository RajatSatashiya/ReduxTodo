import { ADD_TODO } from "./actionType";

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
    default:
      return state;
  }
};

export default reducer;
