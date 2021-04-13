import { timeReducer } from "./Timer/timeReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
   time: timeReducer,

});

  

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
