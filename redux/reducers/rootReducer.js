import { combineReducers } from "redux";
import { getProductsCount, getTotalErnings } from "./productReducer";
import { getOrdersCount, getOrders, updateOrder } from "./orderReducer";
import { loginReducer, getUsersCount, getUsers } from "./authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  users: getUsers,
  getProductsCount: getProductsCount,
  getUsersCount: getUsersCount,
  getOrdersCount: getOrdersCount,
  getTotalErnings: getTotalErnings,
  getOrders: getOrders,
  updatedOrder: updateOrder,
});

export default rootReducer;
