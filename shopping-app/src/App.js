import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ItemBox } from "./ItemBox";
import { Balance } from "./Balance";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };

    this.onClick = this.onClick.bind(this);

    //do we need to add this
  }

  onClick = (e, prevState) => {
    console.log(typeof parseInt(e.target.value, 10));
    console.log(typeof prevState);
    //prev state is undefined, so there's something wrong with pulling that.
    this.setState({ total: this.state.total + parseInt(e.target.value, 10) });
    console.log(this.state.total);
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
