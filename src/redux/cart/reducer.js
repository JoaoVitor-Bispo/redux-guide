import cartActionsTypes from "./action-types"
import CartItem from "../../components/cart-item"

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case cartActionsTypes.ADD_PRODUCT:
            const repeatedId = state.products.some(products => products.id == action.payload.id)

            if(repeatedId) {
                return {...state, products: state.products.map(products => products.id == action.payload.id ? {...products, quantity: products.quantity + 1} : products)}
            }

            return {...state, products: [...state.products, {...action.payload, quantity: 1}]}
        
        case cartActionsTypes.REMOVE_PRODUCT:
            return {...state, products: state.products.filter(products => products.id != action.payload.id)}

        case cartActionsTypes.PLUS_QUANTITY:
            return {...state, products: state.products.map(products => products.id == action.payload.id ? {...products, quantity: products.quantity + 1} : products)}

        case cartActionsTypes.MINUS_QUANTITY:

            return {...state, products: state.products.map(products => products.id == action.payload.id ? {...products, quantity: products.quantity - 1} : products).filter(product => product.quantity > 0)}

        default:
            return state
    }
}

export default cartReducer