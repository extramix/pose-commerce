import { createContext, useEffect, useReducer } from "react";
import reducers from "./Reducers";

export const DataContext = createContext<any>(null);

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    cart: [],
    modal: [],
    orders: [],
    users: [],
    categories: [],
    auth: [],
  };

  const [state, dispatch] = useReducer(reducers, initialState);
  console.log("state" + initialState);

  //add from LocalStorage to cart once load
  useEffect(() => {
    const __pose__commerce__cart = JSON.parse(
      localStorage.getItem("__pose__commerce__cart ")
    );

    if (__pose__commerce__cart)
      dispatch({ type: "ADD_CART", payload: __pose__commerce__cart });
  }, []);

  //if there's an update, push to LocalStorage
  useEffect(() => {
    localStorage.setItem("__pose__commerce__cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
