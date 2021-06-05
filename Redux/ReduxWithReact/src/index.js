import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";// to wrapp app with redux provider

import "./index.css";
import App from "./App";
import store from './store/index'; // to import redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

