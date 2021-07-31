import { combineReducers } from "redux";
import getProductsCount from "./productReducer";
import main from "./main";

const rootReducer = combineReducers({
  main: main,
  getProductsCount: getProductsCount,
});

export default rootReducer;
