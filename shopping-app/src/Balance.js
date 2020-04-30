import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

export class Balance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  render() {
    return (
      <div className="totalBox">
        <h4>Total Spend : ${this.props.total}</h4>
      </div>
    );
  }
}
