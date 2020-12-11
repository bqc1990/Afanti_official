import React, { Component } from "react";
import Cart from "./Cart";

export default class Carts extends Component {
  render() {
    return (
      <div>
        {this.props.cartItems.map((item) => (
          <Cart key={item._id} item={item} />
        ))}
      </div>
    );
  }
}
