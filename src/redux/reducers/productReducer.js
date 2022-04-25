import { ActionTypes } from "../contants/action-types";
const intialState = {
  products: [],
};
const cartState = {

  cartProducts: [],

};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addProductReducer =(state=cartState,{type,payload}) =>{
  console.log(type);
  switch(type){ 
    case ActionTypes.ADD_PRODUCT: 
    return {  ...state,  cartProducts: [...state.cartProducts, payload]  }
     default :
     return state; 
    }
  }

