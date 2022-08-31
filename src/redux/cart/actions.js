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



export const deleteFromCart=(id)=>dispatch=>{
    dispatch(cartRequest())
    axios.delete(`https://json-dummy-server-gajraj.herokuapp.com/cart/${id}`).then(()=>{
        dispatch(fetchCartData())
    })
}