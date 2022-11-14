import React from "react";
import { Link } from "react-router-dom";

function Nav({ cart }) {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
      </ul>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}

export default Nav;
