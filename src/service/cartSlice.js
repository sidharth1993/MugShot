import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeFromCart: (state, action) => {
            const firstIndex = state.cartItems.findIndex(e=> e.name === action.payload);
            const cartToSplice = state.cartItems;
            cartToSplice.splice(firstIndex,1);
            state.cartItems = cartToSplice;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;