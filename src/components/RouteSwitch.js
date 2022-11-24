import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

function RouteSwitch(props) {
  return (
    <BrowserRouter basename="/odin-shopping-cart">
      <Nav cartCounter={props.cartCounter} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          exact
          path="/shop"
          element={
            <Shop
              addToCart={props.addToCart}
              displayedProducts={props.displayedProducts}
              allCategories={props.allCategories}
              handleClick={props.handleClick}
              showAllProducts={props.showAllProducts}
              sortPriceAscending={props.sortPriceAscending}
              sortPriceDescending={props.sortPriceDescending}
            />
          }
        />
        <Route path="/shop/product" element={<Product />} />
        <Route
          path="/cart"
          element={<Cart cart={props.cart} setCart={props.setCart} />}
        />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RouteSwitch;
