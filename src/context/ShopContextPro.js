import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextPro = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());

  const getTotalAmount=()=>{
    let totalAmount = 0
    for(let item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product)=>
          product.id === Number(item)
        )
        totalAmount += cartItems[item] * itemInfo.price
        // console.log(itemInfo.price)
      }
      return totalAmount ;
    }
  }
  const addToCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems,getTotalAmount, addToCart, removeFromCart };
  // console.log();

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export default ShopContextPro;
