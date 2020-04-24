import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ItemBox } from "./ItemBox";
import { Balance } from "./Balance";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  state = { total: 0 };

  onClick = (e) => {
    console.log(typeof e.currentTarget.value);
    this.setState((prevState) => {
      console.log(prevState.total);
      return {
        total: prevState.total + parseInt(e.currentTarget.value, 10),
      };
    });
  };

  render() {
    return (
      <>
        <h1>Shopping Game</h1>
        <Balance total={this.state.total}></Balance>
        <ItemBox onClick={this.onClick}></ItemBox>
      </>
    );
  }
}

// <> means fragment, just a way of grouping things, so if you dont need a div element, the more elements you render, slower your page is
// have a parent that brings all components in
// redux can store everything in one place
// context

//try putting state back in constructor
