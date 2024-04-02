import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id!== action.payload);
            state.total -= action.payload.price;
        },
        clearCart: (state, action) => {
            state.items=[];
        },
        closeCart: (state, action) => {
            state.open = false;
        }
    }
})

export const { addToCart, removeFromCart, clearCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
