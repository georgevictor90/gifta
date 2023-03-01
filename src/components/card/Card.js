import React, { useContext } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CartContext } from "../RouteSwitch";

function Card({ product, displayedProducts }) {
  const { cart, setCart } = useContext(CartContext);

  function addToCart(e) {
    const productId = e.target.parentNode.parentNode.id;
    let updatedCart = [...cart];
    const selectedProduct = displayedProducts.find(
      (prod) => prod.id.toString() === productId
    );
    const found = cart.find((item) => item.id.toString() === productId);

    if (found) {
      updatedCart = updatedCart.map((item) => {
        return item.id === selectedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    } else {
      updatedCart.push({ ...selectedProduct, quantity: 1 });
    }
    setCart(updatedCart);
  }

  return (
    <div className="card" id={product.id}>
      <figure>
        {/* get favoriteStatus from props and conditionally render heart icon */}
        <MdOutlineFavoriteBorder className="card-favorite-icon" />

        {/* get img src from props  */}
        <img src={product.image} alt={product.title} />
      </figure>

      <div className="card-text">
        <span className="card-title">{product.title}</span>

        {/* get stockStatus from props */}
        <span className="card-stock">in stock</span>

        {/* get price from props */}
        <span className="card-price">{product.price} EUR</span>

        <button className="card-button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
