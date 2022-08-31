import { productFailure, productRequest, productSuccess } from "./actionTypes";
import axios from "axios";

export const fetchProducts = (parms) => (dispatch) => {
  dispatch(productRequest());
  axios
    .get(`https://json-dummy-server-gajraj.herokuapp.com/products`, {
      params: {
        ...parms,
        _limit: 10,
      },
    })
    .then(({ data }) => {
      dispatch(productSuccess(data));
    })
    .catch((err) => {
      dispatch(productFailure(err.message));
    });
};
