import { createStore } from "redux";
import { combineReducers } from "redux";

import todoReducer from "../modules/Todos";

const rootReducer = combineReducers({
  Todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
