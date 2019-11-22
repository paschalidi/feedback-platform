import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles, Fonts } from "@simple/components";
import { Provider } from "react-redux";
import Routes from "./Routes";
import configureStore from "./infrastructure/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Fonts />
    <GlobalStyles />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
