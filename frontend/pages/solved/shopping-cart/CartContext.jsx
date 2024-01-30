import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

      // If item already exists, update quantity
      if (itemIndex > -1) {
        let newCart = [...prevCart];
        newCart[itemIndex] = {...newCart[itemIndex]}
        newCart[itemIndex].quantity = newCart[itemIndex].quantity + 1;
        return newCart;
      }

      // If item doesn't exist, add it
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart Hook
export const useCart = () => {
  const {cart, addToCart, removeFromCart} = useContext(CartContext);

  return {cart, addToCart, removeFromCart};
};
