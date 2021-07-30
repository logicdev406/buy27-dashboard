import * as actionTypes from "../constants/productConstants";

export const getProductsCount = (state = { count: "" }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_COUNT_REQUEST:
      return {
        loading: true,
        count: "",
      };
    case actionTypes.GET_PRODUCT_COUNT_SUCCESS:
      return {
        loading: false,
        count: action.payload,
      };
    case actionTypes.GET_PRODUCT_COUNT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
