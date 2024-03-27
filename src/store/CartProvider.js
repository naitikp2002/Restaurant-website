import React, { useReducer } from "react";
import CartContext from "./item-context";

const defaultCartState={
    items:[],
    totalAmount:0
}

const cartReducer= (state, action)=>{
    if(action.type === 'ADD'){
        const updateditems= state.items.concat(action.items);
        const updatedTotleAmount= state.totalAmount+ action.items.Amount* action.items.price;
        return {
            items:updateditems,
            totalAmount:updatedTotleAmount
        }
    }
    if(action.type === 'REMOVE'){

    }

    return defaultCartState;
}
const CartProvider = (props) => {
    const[cartState, dispachCartAction]=useReducer(cartReducer,defaultCartState)
  const addItemToCartHandler = (item) => {
    dispachCartAction({
      type: "ADD",
      item: item,
    });
  };
  const removeItemToCartHandler = (id) => {
    dispachCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;