import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import history from "../helpers/history";

import "../assets/tailwind.output.css";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("output")
);
