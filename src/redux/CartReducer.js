import * as TYPE from "./Type";

const carItems = JSON.parse(window.localStorage.getItem("cartItems"));
export const cartReducer = (state = { cartItems: carItems || [] }, action) => {
  switch (action.type) {
    case TYPE.TYPE_ADD_TO_CART:
      return {
        cartItems: action.payload.items,
      };
    case TYPE.TYPE_REMOVE_FROM_CART:
      return {
        cartItems: action.payload.items,
      };

    default:
      return state;
  }
};
