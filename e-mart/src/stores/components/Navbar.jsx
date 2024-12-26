import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>E-Mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <Link to="/SignUp">
            <div className="user-detail">SignUp</div>
          </Link>
          <Link to="/SignIn">
            <div className="user-detail">SignIn</div>
          </Link>
          <Link to="/cart">
            <div className="cart">
              Cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers">
            <li>Computers</li>
          </Link>
          <li>Watches</li>
          <li>Men Fashion</li>
          <li>Woman Dressing</li>
          <li>Furniture</li>
          <li>AC</li>
          <li>Kitchen</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
