import React, { Component } from "react";
import { connect } from "react-redux";
import { userSignInAction, userGetInfoAction } from "../../../redux/UserAction";
import ErrorHandle from "../../ErrorHandle";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearError = () => {
    this.setState({
      err: "",
    });
  };

  render() {
    return (
      <div
        className="d-flex w-100 vh-100 justify-content-center align-items-center"
        style={{ background: "#f7f7f7" }}
        onSubmit={async (e) => {
          e.preventDefault();

          await this.props.userSignInAction(
            this.state.email,
            this.state.password
          );

          if (this.props.token) {
            this.props.userGetInfoAction();
            window.location = "/";
          }
          this.setState({
            err: this.props.err,
          });
        }}
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
          {this.state.err ? (
            <ErrorHandle
              message={this.state.err}
              clearError={this.clearError}
            />
          ) : null}

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
              New to here? <a href="/sign-up">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userInfo: state.user.userInfo,
    token: state.user.token,
    err: state.user.err,
  }),
  { userSignInAction, userGetInfoAction }
)(SignIn);
