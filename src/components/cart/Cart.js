import React from "react";

function Cart({ cart }) {
  // console.log(cart);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const items = cart.map((prod) => {
      return { ...prod, quantity: 1 };
    });
    setCartItems(items);
  }, [cart]);

  function incrementQuantity(e) {
    // console.log(e.target.parentNode.parentNode.parentNode.id);
    const productId = e.target.parentNode.parentNode.parentNode.id;
    const newCartItems = cartItems.map((prod) => {
      return prod.id == productId
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod;
    });
    console.log(newCartItems);
    setCartItems(newCartItems);
  }

  function decrementQuantity(e) {
    const productId = e.target.parentNode.parentNode.parentNode.id;
    if (cartItems.find((prod) => prod.id == productId).quantity === 1) return;
    const newCartItems = cartItems.map((prod) => {
      return prod.id == productId
        ? { ...prod, quantity: prod.quantity - 1 }
        : prod;
    });
    setCartItems(newCartItems);
    // console.log(productId);
  }

  function removeFromCart(e) {
    const productId = e.target.parentNode.parentNode.parentNode.id;
    const itemToRemove = cartItems.find((prod) => prod.id == productId);
    const index = cartItems.indexOf(itemToRemove);
    const newCartItems = cartItems.splice(index, 1);
    setCartItems(newCartItems);
  }

  const cartProducts = cartItems.map((prod) => {
    return (
      <div key={prod.id} id={prod.id} className="cart-product">
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
          <span>{prod.price * prod.quantity} EUR</span>
        </div>
        <div className="button-container">
          <button onClick={removeFromCart}>Remove item</button>
        </div>
      </div>
    );
  });

  return (
    <section className="cart">
      <h1>Your shopping cart</h1>
      <div className="items-container">{cartProducts}</div>
    </section>
  );
}

export default Cart;
