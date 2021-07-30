import { combineReducers } from "redux";
import getProductsCount from "./productReducer";

const rootReducer = combineReducers({
  productCount: getProductsCount,
});

export default rootReducer;
