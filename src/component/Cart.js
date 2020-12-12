import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCartAction } from "../redux/CartAction";

class Cart extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between my-1 mx-1">
        <img
          src={this.props.item.image}
          width="40"
          height="60"
          alt={this.props.item.title}
        />
        <div className="m-1">
          <strong>some title</strong>
          <div className="d-flex justify-content-around align-items-center">
            <span>
              {this.props.item.count} x ${this.props.item.price}
            </span>
            <span
              className="text-danger m-1"
              onClick={() => this.props.removeFromCartAction(this.props.item)}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-trash-alt" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  { removeFromCartAction }
)(Cart);
