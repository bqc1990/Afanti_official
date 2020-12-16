import * as TYPE from "./Type";

export const addToCartAction = (product) => (dispatch, getState) => {
  let cartItems = getState().cart.cartItems.slice();
  let alreadyInCar = false;
  cartItems.forEach((item) => {
    if (product._id === item._id) {
      item.count++;
      alreadyInCar = true;
    }
  });
  if (!alreadyInCar) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: TYPE.TYPE_ADD_TO_CART,
    payload: {
      items: cartItems,
    },
  });
  window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCartAction = (product) => (dispatch, getState) => {
  let cartItems = getState()
    .cart.cartItems.slice()
    .filter((item) => item._id !== product._id);
  console.log(cartItems);
  dispatch({
    type: TYPE.TYPE_REMOVE_FROM_CART,
    payload: {
      items: cartItems,
    },
  });
  window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeALlFromCartAction = () => (dispatch) => {
  dispatch({
    type: TYPE.TYPE_REMOVE_FROM_CART,
    payload: {
      items: [],
    },
  });
  window.localStorage.setItem("cartItems", []);
};
