import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/Store";
import Home from "./component/page/Home";
import SignIn from "./component/page/auth/Sign-in";
import SignUp from "./component/page/auth/Sign-up";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
