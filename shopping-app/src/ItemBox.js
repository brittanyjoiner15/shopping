import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import jsonData from "./shoppingList.json";

//do i need to build a function that says for each object in the json file, make a ItemBox with this.item and this.price?

class Item extends React.Component {
  render() {
    console.log();
    return (
      <div className="item">
        <h2>Name: {jsonData[0].item}</h2>
        <p> Short Description: </p>
        <h4>Price: ${jsonData[0].price}</h4>
        <button className="btn-primary mx-3 my-3">Buy</button>
        <button className="btn-warning">Sell</button>
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
