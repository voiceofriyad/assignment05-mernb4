// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const exists = prevItems.find((item) => item.id === product.id);
//       if (exists) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((items) => items.filter((item) => item.id !== id));
//   };

//   const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   const total = cartItems.reduce(
//     (acc, item) => acc + item.quantity * item.price,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, cartCount, total }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to cart or increase quantity
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Decrease quantity or remove if qty = 1
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === id);
      if (existing.qty > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  // Remove the item completely
  const removeItemCompletely = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeItemCompletely }}
    >
      {children}
    </CartContext.Provider>
  );
};
