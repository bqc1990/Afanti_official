import React, { Component } from "react";

export default class ErrorHandle extends Component {
  render() {
    return (
      <div
        className="alert alert-danger alert-dismissible fade show w-100 d-flex align-items-center justify-content-between "
        role="alert"
      >
        <span>
          <strong>ERROR:</strong> {this.props.message}
        </span>
        <span onClick={this.props.clearError}>
          <i className="fas fa-window-close "></i>
        </span>
      </div>
    );
  }
}
