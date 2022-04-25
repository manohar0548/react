import { combineReducers } from "redux";
import { productReducer,addProductReducer, selectedProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  cartProducts:addProductReducer,


});
export default reducers;