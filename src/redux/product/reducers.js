import { productActionTypes } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errMessage: null,
  data: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productActionTypes.REQUEST: {
      return {...state,isLoading:true,isError:false,errMessage:null};
    }
    case productActionTypes.SUCCESS: {
        return {...state,isLoading:false,data:payload};
      }
      case productActionTypes.FAILURE: {
        return {...state,isLoading:false,isError:true,errMessage:payload};
      }
    default: {
      return state;
    }
  }
};
