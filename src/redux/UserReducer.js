import * as TYPE from "./Type";

let token = "";
if (window.localStorage.getItem("auth-token") === undefined || null) {
  window.localStorage.setItem("auth0token", token);
} else {
  token = window.localStorage.getItem("auth-token");
}

export const userReducer = (state = { token: token }, action) => {
  switch (action.type) {
    case TYPE.TYPE_USER_SIGN_IN:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        token: action.payload.token,
        err: action.payload.err,
      };
    case TYPE.TYPE_USER_TOKEN_IS_VALIDATE:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        tokenIsValidate: action.payload.tokenIsValidate,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
