import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import jsonData from "./shoppingList.json";

//do i need to build a function that says for each object in the json file, make a ItemBox with this.item and this.price?

//practice mapping

const productList = jsonData.products;

class Item extends React.Component {
  render() {
    return (
      <div>
        {jsonData.Products.map((product, i) => {
          return (
            <div className="item">
              <p>Product: {product.itemName}</p>
              <p>Price: {product.price}</p>
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

//<p> Short Description: </p>
//<h4>Price: ${jsonData[0].price}</h4>
//<button className="btn-primary mx-3 my-3">Buy</button>
//<button className="btn-warning">Sell</button>
//<br />
//<img
//src="https://media.giphy.com/media/fAhOtxIzrTxyE/giphy.gif"
//width="70%"
//alt="pic"
///>

export default Item;
