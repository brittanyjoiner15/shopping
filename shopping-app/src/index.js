import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Item from "./ItemBox";
import MapTest from "./ItemBox";
import Balance from "./calculator";

ReactDOM.render(
  <React.StrictMode>
    <h1>Shopping Game</h1>
    <Balance></Balance>
    <Item></Item>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
