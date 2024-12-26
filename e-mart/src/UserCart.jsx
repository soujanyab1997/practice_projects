import React from "react";
import { useCart } from "./stores/context/CartContext";
import Navbar from "./stores/components/Navbar";

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  return (
    <>
      <Navbar />
      <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="cart-section" key={item.id}>
                <div className="cart-image">
                  <img src={item.image} alt={item.product} />
                </div>
                <div className="cart-details">
                  <h3>{item.product}</h3>
                  <h2>{item.price}</h2>
                  <h3>{item.model}</h3>
                  <h3>Quantity: {item.quantity}</h3>
                </div>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
