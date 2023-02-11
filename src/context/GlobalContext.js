import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      console.log(found);
      found.qantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setCart([...cart, { ...product, qantity: 1 }]);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
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
