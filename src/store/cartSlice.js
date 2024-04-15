import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0, // Initialize total price
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.totalPrice += action.payload.price/100 || action.payload.defaultPrice/100; // Update total price
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                const item = state.items[index];
                if (item.quantity > 1) {
                    state.items[index] = { ...item, quantity: item.quantity - 1 };
                } else {
                    state.items.splice(index, 1);
                }
                state.totalPrice -= action.payload.price/100 || action.payload.defaultPrice/100;; // Update total price
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0; // Reset total price
        },
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


// why reducer and reducers here
// why 2 exports over here