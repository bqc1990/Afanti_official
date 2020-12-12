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

export const sortProductsAction = (filteredProducts, sort) => (dispatch) => {
  let copy = filteredProducts.slice().sort((a, b) => a.eid - b.eid);
  if (sort === "highest") {
    copy = filteredProducts.slice().sort((a, b) => b.price - a.price);
  } else if (sort === "lowest") {
    copy = filteredProducts.slice().sort((a, b) => a.price - b.price);
  }
  dispatch({
    type: TYPE.TYPE_SORT_PRODUCTS,
    payload: {
      sort: sort,
      filteredProducts: copy,
    },
  });
};

export const sizeProductsAction = (size) => (dispatch, getState) => {
  let copy = getState().products.data.slice();
  if (size !== "All") {
    copy = getState()
      .products.data.slice()
      .filter((product) => product.sizes.indexOf(size) >= 0);
  }

  dispatch({
    type: TYPE.TYPE_SIZE_PRODUCTS,
    payload: {
      size: size,
      filteredProducts: copy,
    },
  });
};
