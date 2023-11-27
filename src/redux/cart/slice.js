import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const repeatedId = state.products.some(products => products.id == action.payload.id)

            if(repeatedId) {
                state.products = state.products.map(products => products.id == action.payload.id ? {...products, quantity: products.quantity + 1} : products)
                return;
            }

            state.products = [...state.products, {...action.payload, quantity: 1}]
        }
    }
})

export  const addProduct = () => cartSlice.actions