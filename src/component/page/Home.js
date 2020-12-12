import React, { Component } from "react";
import Filter from "../Filter";
import Header from "../layout/Header";
import Products from "../Products";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex flex-column justify-content-center ">
          <Filter />
          <Products />
        </div>
      </div>
    );
  }
}
