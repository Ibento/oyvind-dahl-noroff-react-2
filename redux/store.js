import { createStore, compose } from "redux";
import reducers from "./reducers";

const devtools = process.browser && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

export const initStore = (initialState = {}) => {
    return createStore(reducers, initialState, compose(devtools));
};