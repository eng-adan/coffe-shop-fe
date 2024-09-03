import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (cartItems.length === 0) {
      setCartItems([{ itemId: item.id, name: item.attributes.name, quantity: 1 }]);
    } else {
      const itemExists = cartItems.some((existingItem) => existingItem.itemId === item.id);
  
      if (itemExists) {
        let items = cartItems.map((existingItem) =>
          existingItem.itemId === item.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : existingItem
        );
        setCartItems(items);
      } else {
        setCartItems([...cartItems, { itemId: item.id, name: item.attributes.name, quantity: 1 }]);
      }
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.itemId !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
