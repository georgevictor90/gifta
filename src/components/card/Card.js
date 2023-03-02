import React, { useContext } from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { CartContext } from "../RouteSwitch";
import { ProductsContext } from "../shop/Shop";

function Card({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const { displayedProducts, allProducts, setAllProducts } =
    useContext(ProductsContext);

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

  function toggleFavorite(productId) {
    setAllProducts(
      allProducts.map((item) => {
        return item.id === productId
          ? { ...item, favorite: !item.favorite }
          : item;
      })
    );
  }

  return (
    <div className="card" id={product.id}>
      <figure>
        <button
          className="card-favorite-button"
          onClick={() => toggleFavorite(product.id)}
        >
          {product.favorite ? (
            <MdOutlineFavorite className="card-favorite-icon" />
          ) : (
            <MdOutlineFavoriteBorder className="card-favorite-icon" />
          )}
        </button>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-text">
        <span className="card-title">{product.title}</span>
        <span className="card-stock">in stock</span>
        <span className="card-price">{product.price} EUR</span>
        <button className="card-button" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
