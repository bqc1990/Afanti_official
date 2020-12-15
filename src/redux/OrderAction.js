import axios from "axios";
import * as TYPE from "../redux/Type";

export const createOrderAction = (
  email,
  firstName,
  lastName,
  address,
  address2,
  country,
  state,
  zip
) => async (dispatch) => {
  const res = await axios.post("http://192.168.1.109:5000/api/order/create", {
    email,
    firstName,
    lastName,
    address,
    address2,
    country,
    state,
    zip,
  });
  console.log(res.data);
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
