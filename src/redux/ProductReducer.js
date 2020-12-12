import * as TYPE from "./Type";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPE.TYPE_FETCH_PRODUCT:
      return {
        data: action.payload.data,
      };

    default:
      return state;
  }
};
