import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartAction } from "../redux/CartAction";
import { Modal, Button, Row, Col } from "react-bootstrap";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      sizeSelectedForModal: "S",
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleSizeChange = (e) => {
    this.setState({
      sizeSelectedForModal: e.target.value,
    });
    console.log(this.state.sizeSelectedForModal);
  };
  render() {
    return (
      <>
        <div
          className="card m-1"
          style={{ maxWidth: "18rem", minWidth: "15rem" }}
        >
          <img
            src={this.props.product.image}
            className="card-img-top"
            alt={this.props.product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-success">
                $<strong>{this.props.product.price}</strong>
              </span>

              <span>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleShow();
                  }}
                >
                  <i
                    style={{ cursor: "pointer" }}
                    className="fas fa-shopping-cart fa-sm text-dark"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Body>
            <Row>
              <Col xs={4} md={4}>
                <img
                  src={this.props.product.image}
                  width="100%"
                  height="auto"
                  alt={this.props.product.title}
                />
              </Col>
              <Col xs={8} md={8}>
                <div>
                  <h5>{this.props.product.title}</h5>
                  <p>{this.props.product.description}</p>
                  <div
                    className="form-check form-check-inline"
                    onChange={this.handleSizeChange}
                  >
                    {/* TOTO: adding selected size to the cart items */}
                    {this.props.product.sizes.map((size) => (
                      <>
                        {size}
                        <input
                          className="form-check-input"
                          type="radio"
                          name="size"
                          value={size}
                          style={{ margin: "0.3rem" }}
                        />
                      </>
                    ))}
                  </div>

                  <span className="text-success" style={{ display: "block" }}>
                    ${this.props.product.price}
                  </span>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                this.props.addToCartAction(this.props.product);
                this.handleClose();
              }}
            >
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  {
    addToCartAction,
  }
)(Product);
