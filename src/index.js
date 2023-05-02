import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import catsReducer from "./features/cats/catsSlice";
import { Provider } from "react-redux";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(catsReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />, 
  </Provider>,
document.getElementById("root"));
