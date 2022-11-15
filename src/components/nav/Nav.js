import React from "react";
import { Link } from "react-router-dom";

function Nav({ cartCounter }) {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
      </ul>
      <Link to="/cart">Cart ({cartCounter})</Link>
    </nav>
  );
}

export default Nav;
