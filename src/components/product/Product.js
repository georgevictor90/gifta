import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../RouteSwitch";

function Product() {
  const product = useLocation().state;

  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-img-container">
          <h1 className="product-title">{product.title}</h1>
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
            width="200px"
            height="auto"
          />
        </div>
        <div className="product-info-container">
          <p className="product-price">€ {product.price}</p>
          <p className="product-rating">
            {product.rating.rate}/5 out of {product.rating.count} votes
          </p>
          <p className="product-description">{product.description}</p>

          <button
            onClick={() => addProductToCart(product)}
            className="card-button buy-now-btn"
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="additional-info">
        <h2>Shipping & Returns</h2>
        <p>
          At Gifta, we want to make sure you receive your order as quickly and
          conveniently as possible.
        </p>
        <p>
          We offer free standard shipping on all available items, which
          typically takes 3-5 business days to arrive via our preferred courier
          partner.
        </p>
        <p>
          In the event that you need to return an item, we also offer
          hassle-free returns within 30 days of delivery. Please contact our
          customer service team at support@gifta.com to initiate a return and
          receive further instructions. For any additional questions or
          concerns, please don't hesitate to reach out to our customer service
          team at support@gifta.com.
        </p>
        <p>
          We're here to help you make the most of your shopping experience with
          us!
        </p>
      </div>
    </div>
  );
}

export default Product;
