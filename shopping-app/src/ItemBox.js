import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import jsonData from "./shoppingList.json";

class Item extends React.Component {
  render() {
    return (
      <div className="itemBox">
        {jsonData.Products.map((product, i) => {
          return (
            <div className="item">
              <h2>{product.itemName}</h2>
              <p>Price: ${product.price}</p>
              <button className="btn-primary mx-2">Buy</button>
              <button className="btn-warning">Sell</button>
              <br />
              <img
                className="my-3"
                src={product.image}
                alt="photo"
                width="75%"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Item;
