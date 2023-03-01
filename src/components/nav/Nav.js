import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../RouteSwitch";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

function Nav() {
  const { cart } = useContext(CartContext);
  const [cartCounter, setCartCounter] = useState(0);

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
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
      </ul>
      <Link className="cart-icon" to="/cart">
        <MdOutlineShoppingCart className="shopping-cart-icon" /> ({cartCounter})
      </Link>
    </nav>
  );
}

export default Nav;
