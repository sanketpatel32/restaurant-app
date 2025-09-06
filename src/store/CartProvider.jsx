import CartContext from "./cart-context";

import React from 'react'

export const CartProvider = (props) => {
    const cartAddItemHandler = (item) => {

    }
    const cartRemoveItemHandler = (id) => {

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: cartAddItemHandler,
        removeItem:  cartRemoveItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}

        </CartContext.Provider> 
  )
}

export default CartProvider 
