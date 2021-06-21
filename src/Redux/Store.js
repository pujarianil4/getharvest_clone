import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "firebase/app";


import { reportReducer } from "./Reports/reportsReducer";
import { timeReducer } from "./Timer/timeReducer";
import { reducerExpense } from "./Expenses/reducerExpense";

const customMiddleware = (store) => (next) => (action) => {
  return typeof action == "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};


const rootReducer = combineReducers({
  time: timeReducer,
  auth: authReducer,
  expense: reducerExpense,

  reports: reportReducer,

});
export const store = createStore(
  rootReducer,

  compose(
    applyMiddleware(customMiddleware),
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
