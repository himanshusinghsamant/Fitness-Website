import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { PRODUCTS } from "../Products";
import { ShopContext } from "../context/ShopContextPro";
import CartItm from "../Components/CartItm";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const Navigate = useNavigate();
  const boxSty = {
    display: "grid",
    justifyContent: "center",
    marginTop: "10px",
  };
  const textCol = {
    color: "white",
  };
  const btnStyle = {
    padding: "10px 5px",
    margin: "10px 0px 10px 10px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "900",
    cursor: "pointer",
    backgroundColor: "yellow",
    boxShadow: "2px 0px 15px 0.1px white",
  };

  return (
    <div>
      <Navbar />
      <h1
        style={{
          color: "white",
          paddingTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Your Cart Items
      </h1>

      <div className="Tot-amount" style={boxSty}>
        <h2 style={textCol}>SubTotal : Rs. {totalAmount} </h2>
        <div className="checkout">
          <button onClick={() => Navigate("/shop")} style={btnStyle}>
            Continue Shopping
          </button>
          <button style={btnStyle}>Checkout</button>
        </div>
      </div>
      <div className="CartItems" style={boxSty}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItm data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
