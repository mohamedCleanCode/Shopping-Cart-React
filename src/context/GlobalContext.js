import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart([...JSON.parse(localStorage.getItem("cart"))]);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ cart, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useDate = () => {
  return useContext(GlobalContext);
};
