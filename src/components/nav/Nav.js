import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../RouteSwitch";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

function Nav() {
  const { cart } = useContext(CartContext);
  const [cartCounter, setCartCounter] = useState(0);
  const [currentSection, setCurrentSection] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentSection("home");
    } else {
      setCurrentSection(location.pathname.substring(1));
    }
  }, [location]);

  useEffect(() => {
    let count = 0;
    if (cart.length) {
      cart.forEach((item) => {
        count = count + item.quantity;
      });
    }
    setCartCounter(count);
  }, [cart]);

  return (
    <nav>
      <h1 className="logo">
        <Link to="/home">. GIFTA</Link>
      </h1>
      <ul>
        <Link className={currentSection === "home" ? "active" : ""} to="/home">
          Home
        </Link>
        <Link className={currentSection === "shop" ? "active" : ""} to="/shop">
          Shop
        </Link>
      </ul>
      <Link
        className={currentSection === "cart" ? "cart-icon active" : "cart-icon"}
        to="/cart"
      >
        <MdOutlineShoppingCart className="shopping-cart-icon" /> ({cartCounter})
      </Link>
    </nav>
  );
}

export default Nav;
