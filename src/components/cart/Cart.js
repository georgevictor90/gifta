import React, { useContext } from "react";
import { CartContext } from "../RouteSwitch";
import OrderSummary from "../orderSummary/orderSummary";
import { MdRemoveCircle } from "react-icons/md";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  function incrementQuantity(e) {
    const productId = e.target.parentNode.parentNode.parentNode.id;
    const newCartItems = cart.map((prod) => {
      return prod.id.toString() === productId
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod;
    });
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
  }

  function removeFromCart(e) {
    let newCartItems = [...cart];
    const productId = e.currentTarget.dataset.id;
    const itemToRemove = cart.find((prod) => prod.id.toString() === productId);
    const index = cart.indexOf(itemToRemove);
    newCartItems.splice(index, 1);
    setCart(newCartItems);
  }

  const cartProducts = cart.map((prod) => {
    return (
      <div key={prod.id} id={prod.id} className="cart-product">
        <img className="cart-product-image" src={prod.image} alt={prod.title} />
        <div className="cart-product-title">{prod.title}</div>
        <div className="cart-product-price">
          <span>Each</span>
          <span>{prod.price} EUR</span>
        </div>
        <div className="quantity-container">
          <div className="quantity-counter">
            <button onClick={decrementQuantity}>-</button>
            <span>{prod.quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>
        </div>
        <div className="cart-product-total">
          <span>Total</span>
          <span>{(prod.price * prod.quantity).toFixed(2)} EUR</span>
        </div>

        <MdRemoveCircle
          data-id={prod.id}
          onClick={removeFromCart}
          className="remove-icon"
        />
      </div>
    );
  });

  return (
    <section className="cart-wrapper">
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
