import React, { useContext } from "react";
import { CartContext } from "../RouteSwitch";
import OrderSummary from "../orderSummary/orderSummary";
import { MdRemoveCircle } from "react-icons/md";
import QuantityCounter from "../quantityCounter/QuantityCounter";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  function updateQuantity(id, count) {
    const newCartItems = cart.map((prod) => {
      if (prod.id === id) {
        return { ...prod, quantity: count };
      }
      return prod;
    });
    setCart(newCartItems);
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  const cartProducts = cart.map((prod) => {
    return (
      <div key={prod.id} id={prod.id} className="cart-product">
        <img className="cart-product-image" src={prod.image} alt={prod.title} />
        <h3 tabIndex="0" className="cart-product-title">
          {prod.title}
        </h3>
        <div className="cart-product-price">
          <span>Each</span>
          <span>{prod.price} EUR</span>
        </div>

        <QuantityCounter
          id={prod.id}
          updateQuantity={updateQuantity}
          quantity={prod.quantity}
        />

        <div className="cart-product-total">
          <span>Total</span>
          <span>{(prod.price * prod.quantity).toFixed(2)} EUR</span>
        </div>

        <button onClick={() => removeFromCart(prod.id)} className="remove-icon">
          <MdRemoveCircle />
        </button>
      </div>
    );
  });

  return (
    <section className="cart-wrapper">
      <h1 className="visually-hidden">Your Cart</h1>
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
