import React, { useState, useEffect, useContext } from "react";
import { getAllCategoriesFromApi } from "../../api";
import { ProductsContext } from "../shop/Shop";
import { MdOutlineFavorite } from "react-icons/md";

function Sidebar() {
  const {
    favorites,
    setSelectedCategory,
    displayedProducts,
    setDisplayedProducts,
    selectedCategory,
  } = useContext(ProductsContext);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategoriesFromApi().then((data) => setAllCategories(data));
  }, []);

  function selectCategory(e) {
    const id = e.target.id;
    setSelectedCategory(id);
  }

  function sortPriceAscending() {
    const sorted = [...displayedProducts].sort((a, b) =>
      Number(a.price) > Number(b.price) ? 1 : -1
    );
    setDisplayedProducts(sorted);
  }

  function sortPriceDescending() {
    const sorted = [...displayedProducts].sort((a, b) =>
      Number(a.price) < Number(b.price) ? 1 : -1
    );
    setDisplayedProducts(sorted);
  }

  function showFavorites() {
    setSelectedCategory("favorites");
    setDisplayedProducts(favorites);
  }

  const listItems = allCategories.map((category) => {
    return (
      <li key={category}>
        <button
          id={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={selectCategory}
        >
          {category}
        </button>
      </li>
    );
  });

  return listItems.length ? (
    <div data-testid="sidebar" className="sidebar">
      <h5>Categories</h5>
      <ul>
        <li>
          <button
            id="all products"
            className={selectedCategory === "all products" ? "selected" : ""}
            onClick={selectCategory}
          >
            All Products
          </button>
        </li>
        {listItems}
        <li>
          <button
            onClick={showFavorites}
            className={
              selectedCategory === "favorites"
                ? "selected favorites-link"
                : "favorites-link"
            }
          >
            <MdOutlineFavorite className="favorite-link--icon" />
            Favorites
          </button>
        </li>
      </ul>
      <h5>Sort Price</h5>
      <ul>
        <li>
          <button onClick={sortPriceDescending}>High to low</button>
        </li>
        <li>
          <button onClick={sortPriceAscending}>Low to high</button>
        </li>
      </ul>
    </div>
  ) : null;
}

export default Sidebar;
