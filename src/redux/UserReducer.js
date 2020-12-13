import * as TYPE from "./Type";

export const userReducer = (
  state = { token: window.localStorage.getItem("auth-token") },
  action
) => {
  switch (action.type) {
    case TYPE.TYPE_USER_SIGN_IN:
      return {
        ...state,
        token: action.payload.token,
        err: action.payload.err,
      };
    case TYPE.TYPE_USER_GET_INFO:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        err: action.payload.err,
      };
    case TYPE.TYPE_USER_TOKEN_IS_VALIDATE:
      return {
        ...state,
        validate: action.payload.validate,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
