import React, { Component } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { connect } from "react-redux";
import Carts from "../Carts";

class Header extends Component {
  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">
          {this.props.cartItems.length === 0
            ? "Your cart is empty"
            : `You have ${this.props.cartItems.length} item(s)`}
        </Popover.Title>
        <Popover.Content>
          {<Carts cartItems={this.props.cartItems} />}
          <a class="btn btn-success btn-block" href="/checkout">
            Continue
          </a>
        </Popover.Content>
      </Popover>
    );
    return (
      <header>
        <nav className="navbar navbar-light">
          <div>
            <a className="navbar-brand" href="/">
              <img
                className="d-inline-block align-center"
                src="/img/a512.svg"
                alt="logo"
                height="40"
              />
            </a>
          </div>
          <div>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-dark " href="/">
                  <i className="far fa-user-circle fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <span className="nav-link text-dark">
                    <i
                      style={{ cursor: "pointer" }}
                      className="fas fa-shopping-cart fa-lg"
                    ></i>
                    <span className="badge">
                      {this.props.cartItems ? this.props.cartItems.length : 0}
                    </span>
                  </span>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(
  (state) => ({ cartItems: state.cart.cartItems }),
  {}
)(Header);
