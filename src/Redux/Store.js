
import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose } from 'redux'
import { reactReduxFirebase } from "react-redux-firebase"
import firebase from "firebase/app";
import { reportReducer } from "./Reports/reportsReducer";


const customMiddleware = (store) => (next) => (action) => {
    return typeof action == "function" ? action(store.dispatch, store.getState) : next(action)
}

// const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
//     createStore
//   );

// export const store = createStoreWithFirebase(
//     authReducer,
//     {},
//     applyMiddleware(customMiddleware)
//   );

export const store = createStore(reportReducer,
    compose(applyMiddleware(customMiddleware), reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

