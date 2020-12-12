import React, { Component } from "react";

export default class SignIn extends Component {
  render() {
    return (
      <div
        className="d-flex w-100 vh-100 justify-content-center align-items-center"
        style={{ background: "#f7f7f7" }}
      >
        <form className="row g-3 m-2" style={{ maxWidth: "700px" }}>
          <div className="col-12 text-center">
            <img src="/img/a512.svg" alt="logo" width="100rem" height="auto" />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Password
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Remeber me
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark btn-block">
              Sign in
            </button>
          </div>

          <div className="col-12 text-center">
            <p>
              New to here <a href="/sign-up">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
