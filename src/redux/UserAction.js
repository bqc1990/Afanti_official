import * as TYPE from "./Type";
import axios from "axios";

export const userSignInAction = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://192.168.1.109:5000/api/user/sign-in", {
      email,
      password,
    });

    console.log(res.data);
    dispatch({
      type: TYPE.TYPE_USER_SIGN_IN,
      payload: {
        userInfo: res.data.user,
        token: res.data.token,
        err: null,
      },
    });
    window.localStorage.setItem("auth-token", res.data.token);
  } catch (err) {
    dispatch({
      type: TYPE.TYPE_USER_SIGN_IN,
      payload: {
        user: null,
        token: "",
        err: err.response.data.msg,
      },
    });
  }
};

export const userSignUpAction = (email, password, repeat_password) => (
  dispatch
) => {};

export const userTokenIsValidateAction = (token) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://192.168/1/109:5000/api/user/tokenIsValidate",
      null,
      { headers: { "auth-token": token } }
    );

    dispatch({
      type: TYPE.TYPE_USER_TOKEN_IS_VALIDATE,
      payload: {
        tokenIsValidate: res.data.validate,
        userInfo: res.data.user,
        err: null,
      },
    });
  } catch (err) {
    dispatch({
      type: TYPE.TYPE_USER_TOKEN_IS_VALIDATE,
      payload: {
        tokenIsValidate: false,
        userInfo: null,
        err: err.response.data.msg,
      },
    });
  }
};
