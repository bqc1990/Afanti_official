import React, { Component } from "react";

export default class Header extends Component {
  render() {
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
                <a className="nav-link text-dark" href="/">
                  <i className="fas fa-shopping-cart fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
