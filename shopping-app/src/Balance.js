import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const total = 0;

export class Balance extends React.Component {
  constructor() {
    super();

    this.state = {
      result: 0,
    };

    this.onClick();
  }

  onClick = (button) => {
    if (button === "buy") {
      this.result = this.result + 1;
    } else if (button === "sell") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  increase = () => {};

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };
  render() {
    return (
      <div className="totalBox">
        <h4>Total Spend : ${this.props.total}</h4>
      </div>
    );
  }
}
