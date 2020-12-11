import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="card m-1" style={{ maxWidth: "18rem" }}>
        <img
          src={this.props.product.image}
          className="card-img-top"
          alt={this.props.product.title}
        />
        <div class="card-body">
          <h5 class="card-title">{this.props.product.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-success">
              $<strong>{this.props.product.price}</strong>
            </span>

            <span>
              <a href="/">
                <i className="fas fa-shopping-cart fa-sm text-dark" />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}