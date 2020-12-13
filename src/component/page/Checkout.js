import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Cart from "../Cart";
import Header from "../layout/Header";

class Checkout extends Component {
  calTotal = () => {
    return this.props.cartItems.reduce(
      (total, item) => (total += item.price * item.count),
      0
    );
  };
  render() {
    return (
      <div className="">
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
              {/* <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </div>
              </form> */}
              <hr className="mb-4" />
            </Col>

            <Col sm={9}>
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">
                      First name <span className="text-muted">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">
                      Last name <span className="text-muted">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
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
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address">
                    Address <span className="text-muted">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">
                      Country <span className="text-muted">*</span>
                    </label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">
                      State <span className="text-muted">*</span>
                    </label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="ca">California</option>
                      <option value="ga">Georgia</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">
                      Zip <span className="text-muted">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                {/* <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="same-address"
                  >
                    Shipping address is the same as my billing address
                  </label>
                </div> */}
                {/* <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                  />
                  <label className="custom-control-label" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr className="mb-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      value="credit"
                      required
                    />
                    <label className="custom-control-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div> */}
                {/* <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      value="debit"
                      required
                    /> */}
                {/* <label className="custom-control-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div> */}
                {/* <div className="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      value="paypal"
                      required
                    /> */}
                {/* <label className="custom-control-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-cvv">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div> */}
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

export default connect((state) => ({
  cartItems: state.cart.cartItems,
}))(Checkout);
