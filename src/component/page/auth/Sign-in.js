import React, { Component } from "react";
import { connect } from "react-redux";
import { userSignInAction } from "../../../redux/UserAction";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: undefined,
      password: undefined,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div
        className="d-flex w-100 vh-100 justify-content-center align-items-center"
        style={{ background: "#f7f7f7" }}
        onSubmit={(e) => {
          e.preventDefault();

          this.props.userSignInAction(this.state.email, this.state.password);
          if (!this.props.userInfo) window.location = "/";
        }}
      >
        <form className="row g-3 m-2" style={{ maxWidth: "700px" }}>
          <div className="col-12 text-center">
            <img src="/img/a512.svg" alt="logo" width="100rem" height="auto" />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
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

export default connect(
  (state) => ({
    user: state.user.userInfo,
    token: state.user.token,
    err: state.user.err,
  }),
  { userSignInAction }
)(SignIn);
