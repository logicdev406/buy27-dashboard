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

const getUsersCount = (state = { count: "" }, action) => {
  switch (action.type) {
    case t.GET_USERS_COUNT_REQUEST:
      return {
        loading: true,
        count: "",
      };
    case t.GET_USERS_COUNT_SUCCESS:
      return {
        loading: false,
        count: action.payload,
      };
    case t.GET_USERS_COUNT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const getTotalErnings = (state = { amount: "" }, action) => {
  switch (action.type) {
    case t.GET_TOTAL_ERNINGS_COUNT_REQUEST:
      return {
        loading: true,
        amount: "",
      };
    case t.GET_TOTAL_ERNINGS_COUNT_SUCCESS:
      return {
        loading: false,
        amount: action.payload,
      };
    case t.GET_TOTAL_ERNINGS_COUNT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const getOrdersCount = (state = { count: "" }, action) => {
  switch (action.type) {
    case t.GET_ORDERS_COUNT_REQUEST:
      return {
        loading: true,
        count: "",
      };
    case t.GET_ORDERS_COUNT_SUCCESS:
      return {
        loading: false,
        count: action.payload,
      };
    case t.GET_ORDERS_COUNT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

module.exports = {
  getProductsCount,
  getUsersCount,
  getOrdersCount,
  getTotalErnings,
};
