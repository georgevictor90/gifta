import React, { useState, useContext, useEffect } from "react";
import { TextField } from "@mui/material";
import { ProductsContext } from "../shop/Shop";

function SearchBar() {
  const [input, setInput] = useState("");
  const { allProducts, favorites, selectedCategory, setDisplayedProducts } =
    useContext(ProductsContext);

  function handleInput(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    const byCategory =
      selectedCategory === "all products"
        ? [...allProducts]
        : selectedCategory === "favorites"
        ? [...favorites]
        : allProducts.filter((item) => item.category === selectedCategory);

    const filtered = !input.length
      ? byCategory
      : byCategory.filter((item) =>
          item.title.toLowerCase().includes(input.toLowerCase())
        );

    setDisplayedProducts(filtered);
  }, [input]);

  useEffect(() => {
    setInput("");
  }, [selectedCategory]);

  return (
    <div className="searchbar-container">
      <TextField
        size="small"
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label={`Search in ${selectedCategory}`}
        onChange={handleInput}
        value={input}
      />
    </div>
  );
}

export default SearchBar;
