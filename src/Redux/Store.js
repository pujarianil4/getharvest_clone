
import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import { reactReduxFirebase } from "react-redux-firebase"
import firebase from "firebase/app";
import { reportReducer } from "./Reports/reportsReducer";
import { timeReducer } from "./Timer/timeReducer";
import { reducerExpense } from "./Expenses/reducerExpense";
import { projectReducer } from "./Project/projectReducer";




const customMiddleware = (store) => (next) => (action) => {
    return typeof action == "function" ? action(store.dispatch, store.getState) : next(action)
}

// export const store = createStore(reportReducer,

const rootReducer = combineReducers({
    time:timeReducer,
    auth: authReducer,
    expense:reducerExpense,

    reports: reportReducer,

    //projects: projectReducer

  });
export const store = createStore(rootReducer,

    compose(applyMiddleware(customMiddleware), reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));