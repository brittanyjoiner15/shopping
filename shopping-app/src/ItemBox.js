import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import jsonData from "./shoppingList.json";
import { PropTypes } from "react";

export class ItemBox extends React.Component {
  render() {
    return (
      <div className="itemBox">
        {jsonData.Products.map((product, i) => {
          return (
            <div className="item" key={product.itemName}>
              <h2>{product.itemName}</h2>
              <p>Price: ${product.price}</p>
              <button
                name="buy"
                className="btn-primary mx-2"
                value={product.price}
                onClick={this.props.onClick}
              >
                Buy
              </button>
              <button className="btn-warning" name="sell">
                Sell
              </button>
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
