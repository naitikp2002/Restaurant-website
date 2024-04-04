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
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                // If the item exists in the cart
                const item = state.items[index];
                if (item.quantity > 1) {
                    // If the quantity is more than 1, decrement the quantity
                    console.log(item.quantity);
                    state.items[index] = { ...item, quantity: item.quantity - 1 };
                } else {
                    // If the quantity is 1, remove the item from the cart
                    state.items.splice(index, 1);
                }
            }
            // state.total -= action.payload.price;
        },
        clearCart: (state, action) => {
            state.items.length=0;
        },
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
