import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
//import { HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
//  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>,
//  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
