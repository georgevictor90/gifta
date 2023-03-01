import React, { useState, useEffect, useContext } from "react";
import { getAllCategoriesFromApi } from "../../api";
import { ProductsContext } from "../shop/Shop";

function Sidebar() {
  const { allProducts, displayedProducts, setDisplayedProducts } =
    useContext(ProductsContext);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategoriesFromApi().then((json) =>
      setAllCategories(
        json.map((categ) => {
          return {
            category: categ,
            checked: true,
          };
        })
      )
    );
  }, []);

  function selectCategory(e) {
    setDisplayedProducts(
      allProducts.filter((prod) => prod.category === e.target.id)
    );
  }

  function showAllProducts() {
    setDisplayedProducts(allProducts);
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

  const listItems = allCategories.map((categ) => {
    return (
      <li id={categ.category} key={categ.category} onClick={selectCategory}>
        {categ.category}
      </li>
    );
  });

  return (
    <div data-testid="sidebar" className="sidebar">
      <h5>Categories</h5>
      <ul>
        <li onClick={showAllProducts}>All Products</li>
        {listItems}
      </ul>
      <h5>Sort Price</h5>
      <ul>
        <li onClick={sortPriceDescending}>High to low</li>
        <li onClick={sortPriceAscending}>Low to high</li>
      </ul>
    </div>
  );
}

export default Sidebar;
