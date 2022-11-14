import "./App.css";
import React from "react";
import RouteSwitch from "./components/RouteSwitch";

function App() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [allCategories, setAllCategories] = React.useState([]);
  const [displayedProducts, setDisplayedProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) =>
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

  React.useEffect(() => {
    setDisplayedProducts(allProducts);
  }, [allProducts]);

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

  function addToCart(e) {
    const productId = e.target.parentNode.id;
    const updatedCart = [...cart];
    const selectedProduct = displayedProducts.find(
      (prod) => prod.id.toString() === productId
    );
    updatedCart.push(selectedProduct);
    setCart(updatedCart);
  }

  return (
    <div className="App">
      <RouteSwitch
        addToCart={addToCart}
        cart={cart}
        displayedProducts={displayedProducts}
        allProducts={allProducts}
        allCategories={allCategories}
        handleClick={selectCategory}
        showAllProducts={showAllProducts}
        sortPriceAscending={sortPriceAscending}
        sortPriceDescending={sortPriceDescending}
      />
    </div>
  );
}

export default App;
