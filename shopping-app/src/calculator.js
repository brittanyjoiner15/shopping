import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import jsonData from "./shoppingList.json";

const total = 0;

function Balance() {
  return (
    <div className="totalBox">
      <h4>Total Spend : ${total}</h4>
    </div>
  );
}

export default Balance;
