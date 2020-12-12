import * as TYPE from "./Type";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPE.TYPE_FETCH_PRODUCT:
      return {
        data: action.payload.data,
        filteredProducts: action.payload.data,
      };

    case TYPE.TYPE_SORT_PRODUCTS:
      return {
        ...state,
        sort: action.payload.sort,
        filteredProducts: action.payload.filteredProducts,
      };

    case TYPE.TYPE_SIZE_PRODUCTS:
      return {
        ...state,
        size: action.payload.size,
        filteredProducts: action.payload.filteredProducts,
      };

    default:
      return state;
  }
};
