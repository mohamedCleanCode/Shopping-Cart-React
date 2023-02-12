import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      found.qantity += 1;
    } else {
      setCart([...cart, { ...product, qantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart([...cart.filter((item) => item.id !== product.id)]);
  };

  const increaseItem = (product) => {
    const found = cart.find((item) => item.id === product.id);
    found.qantity += 1;
    setCart([...cart]);
  };
  const decreaseItem = (product) => {
    const found = cart.find((item) => item.id === product.id);
    found.qantity -= 1;
    setCart([...cart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseItem,
        decreaseItem,
        clearCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useDate = () => {
  return useContext(GlobalContext);
};
