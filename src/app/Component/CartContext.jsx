"use client"
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addtocart":
      // Check if item already exists
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (exists) return state;
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
