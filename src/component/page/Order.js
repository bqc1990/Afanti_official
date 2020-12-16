import React, { Component } from "react";
import { connect } from "react-redux";
class Order extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        Thank you for your order!
        {this.props.orderInfo ? this.props.orderInfo.oid : null}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    products: state.products.filteredProducts,
    orderInfo: state.order.orderInfo,
  }),
  {}
)(Order);
