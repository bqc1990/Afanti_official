import * as TYPE from "../redux/Type";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPE.TYPE_CREATE_ORDER:
      return {
        ...state,
        orderInfo: action.payload,
      };
    case TYPE.TYPE_GET_ORDER:
      return {
        ...state,
        associatedOrder: action.payload,
      };
    default:
      return state;
  }
};
