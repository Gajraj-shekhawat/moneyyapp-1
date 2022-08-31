export const cartActionTypes={
    REQUEST:"REQUEST_CART",
    SUCCESS:"SUCCESS_CART",
    FAILURE:"FAILURE_CART"
}


export const cartRequest=()=>({
    type:cartActionTypes.REQUEST
})


export const cartSuccess=(payload)=>({
    type:cartActionTypes.SUCCESS,
    payload
})


export const cartFailure=(payload)=>({
    type:cartActionTypes.FAILURE,
    payload
})

