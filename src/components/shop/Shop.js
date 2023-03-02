import React, { useState, useEffect, createContext } from "react";
import { getAllProductsFromApi } from "../../api";
import Card from "../card/Card";
import Sidebar from "../sidebar/Sidebar";
export const ProductsContext = createContext(null);

const favoritesFromLocalStorage =
  JSON.parse(localStorage.getItem("favorites")) || [];

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [favorites, setFavorites] = useState(favoritesFromLocalStorage);

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
        }}
      >
        <Sidebar />
        {cardElements.length ? (
          <div data-testid="cards-container" className="cards-container">
            {cardElements}
          </div>
        ) : (
          <div className="no-products">
            {favorites.length ? (
              <>
                <p>Getting products</p>
                <div className="lds-circle">
                  <div></div>
                </div>
              </>
            ) : (
              <p>You have no favorite items</p>
            )}
          </div>
        )}
      </ProductsContext.Provider>
    </section>
  );
}

export default Shop;
