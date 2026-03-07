import { createContext, useContext, useReducer, useState } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import cartItems from "./data";
// Create our global Context //
const GlobalContext = createContext();

const initialState = {
  loading: false,
  //   cart: [...cartItems], //cart items is arr of obj, lets make arr of objs
  // challenge: create map from arr
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

// Global Context Provider to whole app //
const GlobalContextProvider = ({ children }) => {
  // Mange State logic w/ useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    console.log("clearing cart");
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    console.log("removing item from cart", id);
    dispatch({ type: REMOVE, payload: { id: id } });
  };
  const increaseAmount = (id) => {
    dispatch({ type: INCREASE, payload: { id: id } });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE, payload: { id: id } });
  };

  return (
    // spread our state values and pass to children
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Create a custom hook to make accessing/ consuming context easier //
export const useGlobalContext = () => {
  // we are using our global context here and providing the values
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used inside GlobalContextProvider",
    );
  }
  return context;
};
export default GlobalContextProvider;
