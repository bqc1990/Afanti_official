import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./CartReducer";
import { productReducer } from "./ProductReducer";
import { userReducer } from "./UserReducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
