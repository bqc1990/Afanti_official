import * as TYPE from "./Type";
import axios from "axios";

export const userSignInAction = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://192.168.1.109:5000/api/user/sign-in", {
      email,
      password,
    });

    dispatch({
      type: TYPE.TYPE_USER_SIGN_IN,
      payload: {
        token: res.data.token,
      },
    });

    window.localStorage.setItem("auth-token", res.data.token);
  } catch (err) {
    dispatch({
      type: TYPE.TYPE_USER_SIGN_IN,
      payload: {
        err: err.response.data.msg,
      },
    });
  }
};

export const userSignUpAction = (email, password, repeat_password) => (
  dispatch
) => {};

export const userGetInfoAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("http://192.168.1.109:5000/api/user/account", {
      headers: { "auth-token": getState().user.token.slice() },
    });
    dispatch({
      type: TYPE.TYPE_USER_GET_INFO,
      payload: {
        userInfo: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: TYPE.TYPE_USER_GET_INFO,
      payload: {
        err: err.message,
      },
    });
  }
};

export const userTokenIsValidateAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      "http://192.168/1/109:5000/api/user/tokenIsValidate",
      null,
      { headers: { "auth-token": getState().user.token.slice() } }
    );

    dispatch({
      type: TYPE.TYPE_USER_TOKEN_IS_VALIDATE,
      payload: {
        validate: res.data,
      },
    });
  } catch (err) {
    dispatch({
      type: TYPE.TYPE_USER_TOKEN_IS_VALIDATE,
      payload: {
        err: err.response,
      },
    });
  }
};

export const userSignOutAction = () => (dispatch) => {
  dispatch({
    type: TYPE.TYPE_USER_SIGN_OUT,
    payload: {
      validate: false,
      userInfo: null,
      token: "",
    },
  });
};
