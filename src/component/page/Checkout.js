import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Cart from "../Cart";
import Header from "../layout/Header";
import { createOrderAction } from "../../redux/OrderAction";
import { removeALlFromCartAction } from "../../redux/CartAction";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.createOrderAction(
      this.state.email,
      this.state.firstName,
      this.state.lastName
    );

    if (this.props.orderInfo) {
      alert("your number id is " + this.props.orderInfo.oid);
      this.props.removeALlFromCartAction();
      window.location = "/order";
    }
  };
  calTotal = () => {
    return this.props.cartItems.reduce(
      (total, item) => (total += item.price * item.count),
      0
    );
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="py-3 text-center">
            <h2>Checkout</h2>
            <p className="lead"></p>
          </div>
          <Row className="w1-100 vh-100">
            <Col sm={3}>
              <ul className="list-group mb-3">
                {this.props.cartItems.map((item) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Cart item={item} />
                    <span className="text-muted">
                      ${(item.price * item.count).toFixed(2)}
                    </span>
                  </li>
                ))}

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${this.calTotal().toFixed(2)}</strong>
                </li>
              </ul>

              <hr className="mb-4" />
            </Col>

            <Col sm={9}>
              <form className="needs-validation" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">
                      First name <span className="text-muted">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={this.state.firstName}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">
                      Last name <span className="text-muted">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={this.state.lastName}
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">
                    Email <span className="text-muted">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <hr className="mb-4" />
                {this.props.cartItems.length === 0 ? null : (
                  <button
                    className="btn btn-success btn-lg btn-block"
                    type="submit"
                  >
                    Order
                  </button>
                )}
              </form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
    orderInfo: state.order.orderInfo,
  }),
  {
    createOrderAction,
    removeALlFromCartAction,
  }
)(Checkout);
