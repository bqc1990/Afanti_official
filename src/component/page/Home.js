import React, { Component } from "react";
import Header from "../layout/Header";
import Products from "../Products";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
      </div>
    );
  }
}