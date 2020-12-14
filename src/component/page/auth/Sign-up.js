import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div
        className="d-flex w-100 vh-100 justify-content-center align-items-center"
        style={{ background: "#f7f7f7" }}
      >
        <form className="row g-3 m-2" style={{ maxWidth: "700px" }}>
          <div className="col-12 text-center">
            <a href="/">
              <img
                src="/img/a512.svg"
                alt="logo"
                width="100rem"
                height="auto"
              />
            </a>
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Enter your password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Confirm your password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlFor="address2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="city" />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <div>
              <select id="state" className="custom-select d-block w-100">
                <option value="">Choose...</option>
                <option value="ga">GA</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <label htmlFor="zip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="zip" />
          </div>

          <div className="col-12">
            <label></label>
            <button type="submit" className="btn btn-dark btn-block">
              Sign up
            </button>
          </div>
          <div className="col-12 text-center">
            <p>
              Already have an account? <a href="/sign-in">Sign in</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
