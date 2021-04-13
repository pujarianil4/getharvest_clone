
import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose } from 'redux'


const customMiddleware = (store) => (next) => (action) => {
    return typeof action == "function" ? action(store.dispatch, store.getState) : next(action)
}

export const store = createStore(authReducer,
    compose(applyMiddleware(customMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

