import { combineReducers } from "redux";
import {
  getProductsCount,
  getUsersCount,
  getOrdersCount,
  getTotalErnings,
  getOrders,
} from "./productReducer";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  getProductsCount: getProductsCount,
  getUsersCount: getUsersCount,
  getOrdersCount: getOrdersCount,
  getTotalErnings: getTotalErnings,
  getOrders: getOrders,
});

export default rootReducer;
