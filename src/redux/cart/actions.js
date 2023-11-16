import cartActionsTypes from "./action-types"

export const addProductToCart = (payload) => ({
    type: cartActionsTypes.ADD_PRODUCT,
    payload
})