import React, { useContext } from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../RouteSwitch";
import { ProductsContext } from "../shop/Shop";

function Card({ product }) {
  const { addProductToCart } = useContext(CartContext);
  const { favorites, setFavorites, allProducts } = useContext(ProductsContext);

  function handleButtonClick(e, product) {
    e.preventDefault();
    e.stopPropagation();
    addProductToCart(product);
  }

  function toggleFavorite(e, productId) {
    e.preventDefault();
    e.stopPropagation();
    const found = allProducts.find((item) => item.id === productId);
    if (favorites.includes(found)) {
      setFavorites(favorites.filter((item) => item.id !== found.id));
    } else {
      setFavorites([...favorites, found]);
    }
  }

  return (
    <Link to={`/shop/product/${product.id}`} state={product}>
      <div className="card" id={product.id}>
        <figure>
          <button
            className="card-favorite-button"
            onClick={(e) => toggleFavorite(e, product.id)}
          >
            {favorites.find((item) => item.id === product.id) ? (
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
          <button
            className="card-button"
            onClick={(e) => handleButtonClick(e, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
