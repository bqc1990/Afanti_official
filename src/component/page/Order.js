import React, { Component } from "react";
import { connect } from "react-redux";
class Order extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        Thank you for your order! your order number is {this.props.orderInfo}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    orderInfo: state.order.orderInfo,
  }),
  {}
)(Order);
