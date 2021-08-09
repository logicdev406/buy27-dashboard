import { combineReducers } from "redux";
import {
  getProductsCount,
  getUsersCount,
  getTotalErnings,
} from "./productReducer";
import { getOrdersCount, getOrders } from "./orderReducer";
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
