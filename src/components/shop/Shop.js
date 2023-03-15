import React, { useState, useEffect, createContext } from "react";
import { getAllProductsFromApi } from "../../api";
import Card from "../card/Card";
import SearchBar from "../searchbar/SearchBar";
import Sidebar from "../sidebar/Sidebar";
export const ProductsContext = createContext(null);

const favoritesFromLocalStorage =
  JSON.parse(localStorage.getItem("favorites")) || [];

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [favorites, setFavorites] = useState(favoritesFromLocalStorage);
  const [selectedCategory, setSelectedCategory] = useState("all products");
  const [error, setError] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    getAllProductsFromApi().then((data) =>
      setAllProducts(
        data.map((product) => {
          return { ...product, favorite: false };
        })
      )
    );
  }, []);

  useEffect(() => {
    setDisplayedProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    if (selectedCategory === "favorites") return;
    if (selectedCategory === "all products") {
      setDisplayedProducts(allProducts);
    } else {
      setDisplayedProducts(
        allProducts.filter((prod) => prod.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    setLoadingSpinner(false);
    if (!allProducts.length) {
      setError("Loading products");
      setLoadingSpinner(true);
    } else if (!favorites.length && selectedCategory === "favorites") {
      setError("You have no items added to favorites");
    } else if (!displayedProducts.length) {
      setError("No products match your search criteria");
    }
  }, [allProducts, displayedProducts, favorites]);

  const cardElements = displayedProducts.map((product) => {
    return <Card key={product.id} product={product} />;
  });

  return (
    <section className="shop">
      <ProductsContext.Provider
        value={{
          favorites,
          setFavorites,
          allProducts,
          setAllProducts,
          displayedProducts,
          setDisplayedProducts,
          selectedCategory,
          setSelectedCategory,
        }}
      >
        <Sidebar />

        <div className="shop-right">
          <SearchBar />
          {cardElements.length ? (
            <div data-testid="cards-container" className="cards-container">
              {cardElements}
            </div>
          ) : (
            // <div className="no-products">
            //   {selectedCategory === "favorites" ? (
            //     <p>You have no favorite items</p>
            //   ) : (
            //     <>
            //       <div className="lds-circle">
            //         <div></div>
            //       </div>
            //       <p>Getting products</p>
            //     </>
            //   )}
            // </div>
            <div className="no-products">
              {loadingSpinner && (
                <div className="lds-circle">
                  <div></div>
                </div>
              )}
              <p>{error}</p>
            </div>
          )}
        </div>
      </ProductsContext.Provider>
    </section>
  );
}

export default Shop;
