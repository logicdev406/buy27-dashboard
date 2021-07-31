import { combineReducers } from "redux";
import getProductsCount from "./productReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  getProductsCount: getProductsCount,
});

export default rootReducer;
