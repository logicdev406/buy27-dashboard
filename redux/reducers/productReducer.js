import * as t from "../types";

const getProductsCount = (state = { count: "" }, action) => {
  switch (action.type) {
    case t.GET_PRODUCT_COUNT_REQUEST:
      return {
        loading: true,
        count: "",
      };
    case t.GET_PRODUCT_COUNT_SUCCESS:
      return {
        loading: false,
        count: action.payload,
      };
    case t.GET_PRODUCT_COUNT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getProductsCount;
