import { createContext, useState } from "react";
import { all_product } from "../Utils/all_product";
import new_collections from "../Utils/new_collection";

export const AppContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const AppContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const addTocart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItem[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };
  const getTotalCartItem = () => {
    let totalCartItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalCartItem += cartItem[item];
      }
    }
    return totalCartItem;
  };
  

  const values = {
    all_product,
    new_collections,
    cartItem,
    addTocart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
