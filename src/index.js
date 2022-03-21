import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";

ReactDOM.render(<App />, document.querySelector("#root"), _ => {
  console.log("DOM connected");
});
