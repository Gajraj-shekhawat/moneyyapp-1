import { addToCartFailure, addToCartRequest, cartFailure, cartRequest, cartSuccess } from "./actionTypes"
import axios from 'axios'

export const fetchCartData=()=>(dispatch)=>{
    dispatch(cartRequest())
    axios.get(`https://json-dummy-server-gajraj.herokuapp.com/cart`).then(({data})=>{
        dispatch(cartSuccess(data))
    }).catch(err=>{
        dispatch(cartFailure(err.message))
    })
    
}

export const addProductToCart=(el)=>dispatch=>{
    dispatch(addToCartRequest())
    axios.post(`https://json-dummy-server-gajraj.herokuapp.com/cart`,el).then(()=>{
        dispatch(fetchCartData())
    }).catch(err=>{
        dispatch(addToCartFailure(err.message))
    })
}