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

export const getUsersCount = (token) => async (dispatch) => {
  try {
    if (token) {
      setAuthToken(token);
    }
    dispatch({ type: t.GET_USERS_COUNT_REQUEST });

    const { data } = await axios.get(
      "https://backend.buy27.ng/api/users/get/count"
    );

    dispatch({
      type: t.GET_USERS_COUNT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.GET_USERS_COUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrdersCount = (token) => async (dispatch) => {
  try {
    if (token) {
      setAuthToken(token);
    }
    dispatch({ type: t.GET_ORDERS_COUNT_REQUEST });

    const { data } = await axios.get(
      "https://backend.buy27.ng/api/orders/get/count"
    );

    dispatch({
      type: t.GET_ORDERS_COUNT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.GET_ORDERS_COUNT_FAIL,
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
    dispatch({ type: t.GET_TOTAL_ERNINGS_COUNT_REQUEST });

    const { data } = await axios.get(
      "https://backend.buy27.ng/api/orders/get/totalsales"
    );

    dispatch({
      type: t.GET_TOTAL_ERNINGS_COUNT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.GET_TOTAL_ERNINGS_COUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
