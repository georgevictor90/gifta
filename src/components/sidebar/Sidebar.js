import React from "react";

function Sidebar({
  allCategories,
  handleClick,
  showAllProducts,
  sortPriceAscending,
  sortPriceDescending,
}) {
  const listItems = allCategories.map((categ) => {
    return (
      <li id={categ.category} key={categ.category} onClick={handleClick}>
        {categ.category}
      </li>
    );
  });

  return (
    <div className="sidebar">
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
