import { combineReducers } from "redux";
import { getProductsCount } from "./productReducer";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  getProductsCount: getProductsCount,
});

export default rootReducer;
