import React from "react";
import { nanoid } from "nanoid";
import OrderSummary from "../orderSummary/orderSummary";

function Cart({ cart, setCart }) {
  function incrementQuantity(e) {
    // console.log(e.target.parentNode.parentNode.parentNode.id);
    const productId = e.target.parentNode.parentNode.parentNode.id;
    const newCartItems = cart.map((prod) => {
      return prod.id.toString() === productId
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod;
    });
    console.log(newCartItems);
    setCart(newCartItems);
  }

  function decrementQuantity(e) {
    const productId = e.target.parentNode.parentNode.parentNode.id;
    if (cart.find((prod) => prod.id.toString() === productId).quantity === 1)
      return;
    const newCartItems = cart.map((prod) => {
      return prod.id.toString() === productId
        ? { ...prod, quantity: prod.quantity - 1 }
        : prod;
    });
    setCart(newCartItems);
    // console.log(productId);
  }

  function removeFromCart(e) {
    let newCartItems = [...cart];
    const productId = e.target.dataset.id;
    const itemToRemove = cart.find((prod) => prod.id.toString() === productId);
    const index = cart.indexOf(itemToRemove);
    newCartItems.splice(index, 1);
    setCart(newCartItems);
  }

  const cartProducts = cart.map((prod) => {
    return (
      <div key={nanoid()} id={prod.id} className="cart-product">
        <img className="cart-product-image" src={prod.image} alt={prod.title} />
        <div className="cart-product-title">{prod.title}</div>
        <div className="cart-product-price">
          <span>Each</span>
          <span>{prod.price} EUR</span>
        </div>
        <div className="quantity-container">
          <span>Quantity</span>
          <div className="quantity-counter">
            <span onClick={decrementQuantity}>-</span>
            <span>{prod.quantity}</span>
            <span onClick={incrementQuantity}>+</span>
          </div>
        </div>
        <div className="cart-product-total">
          <span>Total</span>
          <span>{(prod.price * prod.quantity).toFixed(2)} EUR</span>
        </div>
        <div className="button-container">
          <button data-id={prod.id} onClick={removeFromCart}>
            Remove item
          </button>
        </div>
      </div>
    );
  });

  return (
    <section className="cart-wrapper">
      {/* <h1>Your shopping cart</h1> */}
      <div className="cart">
        {cart.length ? (
          <div className="items-container">{cartProducts}</div>
        ) : (
          <h4>You have no items added to your cart</h4>
        )}
      </div>
      <OrderSummary cart={cart} />
    </section>
  );
}

export default Cart;
