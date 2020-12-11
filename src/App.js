import { Provider } from "react-redux";
import store from "./redux/Store";
import Home from "./component/page/Home";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
