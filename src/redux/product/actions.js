import { productFailure, productRequest, productSuccess } from "./actionTypes"
import axios from 'axios'

export const fetchProducts=()=>dispatch=>{
    dispatch(productRequest())
    axios.get(`https://json-dummy-server-gajraj.herokuapp.com/products`).then(({data})=>{
        dispatch(productSuccess(data))
    }).catch(err=>{
        dispatch(productFailure(err.message))
    })
}