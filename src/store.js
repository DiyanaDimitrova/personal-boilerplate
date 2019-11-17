import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    middlewares.push(devToolsExtension());
  }
}
const composedMiddlewares = compose(
  applyMiddleware(thunk),
  ...middlewares
);
export default function configureStore(initialState = { simple: {data: 'Simple App', loading: false, error: null }}) {
  return createStore(rootReducer, initialState, composedMiddlewares);
}
