import React from "react";
import { createContext } from "react";
export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = React.useState(0);
  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
};

export default Context;
