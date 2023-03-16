import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
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

  function addProductToCart(product) {
    const productAlreadyInCart = cart.find((item) => item.id === product.id);
    if (productAlreadyInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  }

  return (
    <HashRouter>
      <CartContext.Provider value={{ cart, setCart, addProductToCart }}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/product:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
      <Footer />
    </HashRouter>
  );
}

export default RouteSwitch;
