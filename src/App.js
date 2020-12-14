import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/page/Home";
import SignIn from "./component/page/auth/Sign-in";
import SignUp from "./component/page/auth/Sign-up";
import { connect } from "react-redux";
import { userGetInfoAction } from "./redux/UserAction";
import Account from "./component/page/Account";
import Checkout from "./component/page/Checkout";

class App extends React.Component {
  componentDidMount() {
    this.props.userGetInfoAction();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/account" component={Account} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  (state) => ({
    userInfo: state.user.userInfo,
    validate: state.user.validate,
    err: state.user.err,
  }),
  { userGetInfoAction }
)(App);
