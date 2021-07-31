import * as t from "../types";
import axios from "axios";
// import { request } from "../../util/request";

export const getProductsCount = () => async (dispatch) => {
  try {
    dispatch({ type: t.GET_PRODUCT_COUNT_REQUEST });

    const { data } = await axios.get("localhost:3000/api/products/get/count");

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
