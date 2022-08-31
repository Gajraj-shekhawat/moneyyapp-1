import {  cartActionTypes } from "./actionTypes";


const initialState = {
  isLoading: false,
  isError: false,
  errMessage: null,
  cart: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.REQUEST: {
      return {...state,isLoading:true,isError:false,errMessage:null};
    }
    case cartActionTypes.SUCCESS: {
        return {...state,isLoading:false,cart:payload};
      }
      case cartActionTypes.FAILURE: {
        return {...state,isLoading:false,isError:true,errMessage:payload};
      }


    default: {
      return state;
    }
  }
};
