import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
export const CartContext = createContext(null);

function RouteSwitch() {
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter basename="/odin-shopping-cart">
      <CartContext.Provider value={{ cart, setCart }}>
        <Nav />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="/shop/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
