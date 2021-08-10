import * as t from "../types";
import axios from "axios";
import setAuthToken from "../../helper/setAuthToken";

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

export const getOrders = (token) => async (dispatch) => {
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

export const updateOrder =
  ({ token, Data, id }) =>
  async (dispatch) => {
    try {
      if (token) {
        setAuthToken(token);
      }
      dispatch({ type: t.UPDATE_ORDER_REQUEST });

      const { data } = await axios.put(
        `https://backend.buy27.ng/api/orders/${id}`,
        Data
      );

      dispatch({
        type: t.UPDATE_ORDER_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: t.UPDATE_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
