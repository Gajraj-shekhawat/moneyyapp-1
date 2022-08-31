export const productActionTypes={
    REQUEST:"REQUEST_PRODUCT",
    SUCCESS:"SUCCESS_PRODUCT",
    FAILURE:"FAILURE_PRODUCT"
}

export const productRequest=()=>({
    type:productActionTypes.REQUEST
})


export const productSuccess=(payload)=>({
    type:productActionTypes.SUCCESS,
    payload
})


export const productFailure=(payload)=>({
    type:productActionTypes.FAILURE,
    payload
})

