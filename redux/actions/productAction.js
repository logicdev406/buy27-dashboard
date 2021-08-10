import * as t from "../types";
import axios from "axios";
import setAuthToken from "../../helper/setAuthToken";
// import { request } from "../../util/request";

export const getProductsCount = (token) => async (dispatch) => {
  try {
    if (token) {
      setAuthToken(token);
    }
    dispatch({ type: t.GET_PRODUCT_COUNT_REQUEST });

    const { data } = await axios.get(
      "https://backend.buy27.ng/api/products/get/count"
    );

    dispatch({
      type: t.GET_PRODUCT_COUNT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.GET_PRODUCT_COUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTotalErnings = (token) => async (dispatch) => {
  try {
    if (token) {
      setAuthToken(token);
    }
    dispatch({ type: t.GET_ORDERS_REQUEST });

    const { data } = await axios.get("https://backend.buy27.ng/api/orders");

    dispatch({
      type: t.GET_ORDERS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
