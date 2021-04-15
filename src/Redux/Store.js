
import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import { reactReduxFirebase } from "react-redux-firebase"
import firebase from "firebase/app"
import { timeReducer } from "./Timer/timeReducer";


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

const rootReducer = combineReducers({
    time:timeReducer,
    auth: authReducer
  });

export const store = createStore(rootReducer,
    compose(applyMiddleware(customMiddleware), reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

