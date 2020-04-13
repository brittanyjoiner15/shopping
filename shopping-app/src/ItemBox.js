import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class Item extends React.Component {
  render() {
    return (
      <div class="item">
        <h2>Items Name Will Go Here</h2>
        <p> Short Description</p>
        <button>Buy</button>
        <button>Sell</button>
        <br />
        <img
          src="https://media.giphy.com/media/fAhOtxIzrTxyE/giphy.gif"
          width="70%"
        />
      </div>
    );
  }
}

export default Item;
