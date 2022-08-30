export const cartActionTypes={
    REQUEST:"REQUEST_CART",
    SUCCESS:"SUCCESS_CART",
    FAILURE:"FAILURE_CART"
}
export const addToCartActionTypes={
    REQUEST:"REQUEST_ADD",
    SUCCESS:"SUCCESS_ADD",
    FAILURE:"FAILURE_ADD"
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

export const addToCartRequest=()=>({
    type:addToCartActionTypes.REQUEST
})


// export const addToCartSuccess=(payload)=>({
//     type:addToCartActionTypes.SUCCESS,
//     payload
// })


export const addToCartFailure=(payload)=>({
    type:addToCartActionTypes.FAILURE,
    payload
})