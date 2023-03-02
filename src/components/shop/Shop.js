import React, { useState, useEffect, createContext } from "react";
import { getAllProductsFromApi } from "../../api";
import Card from "../card/Card";
import Sidebar from "../sidebar/Sidebar";
export const ProductsContext = createContext(null);

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

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
    return (
      <Card
        // displayedProducts={displayedProducts}
        key={product.id}
        product={product}
      />
    );
  });

  return (
    <section className="shop">
      {cardElements.length ? (
        <>
          <ProductsContext.Provider
            value={{
              allProducts,
              setAllProducts,
              displayedProducts,
              setDisplayedProducts,
            }}
          >
            <Sidebar />
            <div data-testid="cards-container" className="cards-container">
              {cardElements}
            </div>
          </ProductsContext.Provider>
        </>
      ) : (
        <div className="no-products">
          <p>Getting products</p>
          <div className="lds-circle">
            <div></div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Shop;
