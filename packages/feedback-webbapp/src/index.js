import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles, Fonts } from "@simple/components";
import Routes from "./Routes";

ReactDOM.render(
  <div>
    <Fonts />
    <GlobalStyles />
    <Routes />
  </div>,
  document.getElementById("root")
);
