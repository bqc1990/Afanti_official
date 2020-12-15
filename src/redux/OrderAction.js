import axios from "axios";
import * as TYPE from "../redux/Type";

export const createOrderAction = (email, firstName, lastName) => async (
  dispatch,
  getState
) => {
  const res = await axios.post("http://192.168.1.109:5000/api/order/create", {
    email,
    firstName,
    lastName,
    cartItems: getState().cart.cartItems,
  });

  dispatch({
    type: TYPE.TYPE_CREATE_ORDER,
    payload: res.data,
  });
};

export const getOrderAction = () => async (dispatch, getState) => {
  const email = getState().user.userInfo.email;
  const res = await axios.get(
    "http://192.168.1.109:5000/api/order/get?email=" + email
  );

  dispatch({
    type: TYPE.TYPE_GET_ORDER,
    payload: res.data,
  });
};
