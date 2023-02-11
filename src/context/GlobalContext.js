import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      found.qantity += 1;
      // localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setCart([...cart, { ...product, qantity: 1 }]);
      // localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const removeFromCart = (product) => {
    setCart([...cart.filter((item) => item.id !== product.id)]);
    // localStorage.setItem("cart", JSON.stringify(cart));
  };

  const totalPrice = () => {
    setTotal(
      cart.reduce((acc, curr) => {
        return acc.price * acc.qantity + curr.price * curr.qantity;
      }, 0)
    );
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart([...JSON.parse(localStorage.getItem("cart"))]);
    }
  }, [total]);

  return (
    <GlobalContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useDate = () => {
  return useContext(GlobalContext);
};
