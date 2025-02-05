import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const cartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === product.id);
      return item
        ? prev.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + amount) } : p
      )
    );
  };

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));

  return (
    <cartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);
