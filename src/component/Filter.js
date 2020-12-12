import React, { Component } from "react";
import { connect } from "react-redux";
import { sortProductsAction, sizeProductsAction } from "../redux/ProductAction";

class Filter extends Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-around">
        <div>
          <span>
            {this.props.filteredProducts ? (
              `${this.props.filteredProducts.length} product(s)`
            ) : (
              <div></div>
            )}
          </span>
        </div>

        <select
          onChange={(e) => {
            this.props.sortProductsAction(
              this.props.filteredProducts,
              e.target.value
            );
          }}
        >
          <option value="newest">Newest</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>

        <select
          onChange={(e) => {
            this.props.sizeProductsAction(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
          <option value="XXXXL">XXXXL</option>
        </select>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    products: state.products.data,
    filteredProducts: state.products.filteredProducts,
    sort: state.products.sort,
    size: state.products.size,
  }),
  { sortProductsAction, sizeProductsAction }
)(Filter);
