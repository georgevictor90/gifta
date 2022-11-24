import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

function Nav({ cartCounter }) {
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
