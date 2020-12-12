import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsAction } from "../redux/ProductAction";
import Product from "./Product";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProductsAction();
  }
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center ">
        {this.props.filteredProducts ? (
          <div className="row row-cols-1 row-cols-md-4 m-3 justify-content-center">
            {this.props.filteredProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden" />
          </div>
        )}
      </div>
    );
  }
}
export default connect(
  (state) => ({
    products: state.products.data,
    filteredProducts: state.products.filteredProducts,
  }),
  {
    fetchProductsAction,
  }
)(Products);
