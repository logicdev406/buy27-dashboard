import * as t from "../types";
const getOrders = (state = { orders: [] }, action) => {
  switch (action.type) {
    case t.GET_ORDERS_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case t.GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case t.GET_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const updateOrders = (state = { orders: [] }, action) => {
  switch (action.type) {
    case t.GET_ORDERS_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case t.GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case t.GET_ORDERS_FAIL:
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
  updateOrders,
  getOrders,
  getOrdersCount,
};
