import React, { Component } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { connect } from "react-redux";
import Carts from "../Carts";
import { userSignOutAction } from "../../redux/UserAction";

class Header extends Component {
  render() {
    const popover_cart = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">
          {this.props.cartItems.length === 0
            ? "Your cart is empty"
            : `You have ${this.props.cartItems.length} item(s)`}
        </Popover.Title>
        <Popover.Content>
          {<Carts cartItems={this.props.cartItems} />}
          <a class="dropdown-item text-success text-center" href="/checkout">
            Continue
          </a>
        </Popover.Content>
      </Popover>
    );
    const popover_user = (
      <Popover id="popover-basic">
        <Popover.Title as="h3"></Popover.Title>
        <Popover.Content>
          {this.props.userInfo ? (
            <div>
              <a class="dropdown-item" href="/account">
                Account
              </a>
              <hr class="dropdown-divider" />
              <span
                style={{ cursor: "pointer" }}
                className="dropdown-item text-danger"
                onClick={() => {
                  this.props.userSignOutAction();
                  window.localStorage.setItem("auth-token", "");
                }}
              >
                Log out
              </span>
            </div>
          ) : (
            <div>
              <a class="dropdown-item text-success" href="/sign-in">
                Sign in
              </a>
            </div>
          )}
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
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover_user}
                >
                  <span
                    className="nav-link text-dark"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      style={{ cursor: "pointer" }}
                      className="far fa-user-circle fa-lg"
                    ></i>{" "}
                    User
                  </span>
                </OverlayTrigger>
              </li>
              <li className="nav-item">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover_cart}
                >
                  <span
                    className="nav-link text-dark"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-shopping-cart fa-lg"></i>
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
  (state) => ({
    cartItems: state.cart.cartItems,
    userInfo: state.user.userInfo,
    token: state.user.token,
  }),
  { userSignOutAction }
)(Header);
