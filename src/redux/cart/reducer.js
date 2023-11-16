import cartActionsTypes from "./action-types"
import CartItem from "../../components/cart-item"

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case cartActionsTypes.ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}

        default:
            return state
    }
}

export default cartReducer