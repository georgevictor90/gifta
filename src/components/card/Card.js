import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      {/* get favoriteStatus from props and conditionally render heart icon */}
      <MdOutlineFavoriteBorder className="card-favorite-icon" />

      {/* get img src from props  */}
      <img src={props.image} alt={props.title} />

      <span className="card-title">{props.title}</span>

      {/* get stockStatus from props */}
      <span className="card-stock">in stock</span>

      {/* get price from props */}
      <span className="card-price">{props.price} EUR</span>

      <button className="card-button">Add to cart</button>
    </div>
  );
}

export default Card;
