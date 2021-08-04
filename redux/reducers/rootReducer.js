import { combineReducers } from "redux";
import { getProductsCount, getUsersCount } from "./productReducer";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  getProductsCount: getProductsCount,
  getUsersCount: getUsersCount,
});

export default rootReducer;
