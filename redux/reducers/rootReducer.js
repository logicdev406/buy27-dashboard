import { combineReducers } from "redux";
import getProductsCount from "./productReducer";
import authUser from "./authReducer";

const rootReducer = combineReducers({
  authUser: authUser,
  getProductsCount: getProductsCount,
});

export default rootReducer;
