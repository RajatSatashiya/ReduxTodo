import { createStore } from "redux";
import Reducer from "./Reducer";

// const store = createStore(Reducer);
const store = createStore(
  Reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
