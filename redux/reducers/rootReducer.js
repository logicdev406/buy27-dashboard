import { combineReducers } from "redux";
import {
  getProductsCount,
  getUsersCount,
  getOrdersCount,
  getTotalErnings,
} from "./productReducer";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  getProductsCount: getProductsCount,
  getUsersCount: getUsersCount,
  getOrdersCount: getOrdersCount,
  getTotalErnings: getTotalErnings,
});

export default rootReducer;
