import cartActionsTypes from "./action-types"

export const addProductToCart = (payload) => ({
    type: cartActionsTypes.ADD_PRODUCT,
    payload
})

export const removeProductFromCart = (payload) => ({
    type: cartActionsTypes.REMOVE_PRODUCT,
    payload
})

export const plusProductQuantity = (payload) => ({
    type: cartActionsTypes.PLUS_QUANTITY,
    payload
})

export const minusProductQuantity = (payload) => ({
    type: cartActionsTypes.MINUS_QUANTITY,
    payload
})