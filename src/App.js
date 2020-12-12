import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/page/Home";
import SignIn from "./component/page/auth/Sign-in";
import SignUp from "./component/page/auth/Sign-up";
import { connect } from "react-redux";
import { userTokenIsValidateAction } from "./redux/UserAction";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  (state) => ({
    userInfo: state.user.userInfo,
    tokenIsValidate: state.user.tokenIsValidate,
    err: state.user.err,
  }),
  {
    userTokenIsValidateAction,
  }
)(App);
