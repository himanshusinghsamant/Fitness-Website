import React, { useContext } from "react";
import "./CartItmStyle.css";
import { ShopContext } from "../context/ShopContextPro";

const CartItm = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  console.log(cartItems)
  return (
    <div className="cartItm">
          <img src={image} alt="" />
        
        <div className="proDtl">
          <h3>Quantity({cartItems[id]})</h3>
          <h2>{name}</h2>
          <h4>Rs . {price}</h4>
          <div className="QntBtn">
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
  );
};

export default CartItm;
