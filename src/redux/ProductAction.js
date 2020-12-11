import * as TYPE from "./Type";

export const fetchProductsAction = () => async (dispatch) => {
  const res = await fetch("http://192.168.1.109:5000/api/product/all");
  const data = await res.json();
  dispatch({
    type: TYPE.TYPE_FETCH_PRODUCT,
    payload: {
      data,
    },
  });
};
