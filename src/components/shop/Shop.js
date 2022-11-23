import React from "react";
import Card from "../card/Card";
import Sidebar from "../sidebar/Sidebar";

function Shop(props) {
  const cardElements = props.displayedProducts.map((product) => {
    return (
      <Card
        addToCart={props.addToCart}
        key={product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        image={product.image}
        price={product.price}
      />
    );
  });

  return (
    <section className="shop">
      <Sidebar
        allCategories={props.allCategories}
        handleClick={props.handleClick}
        showAllProducts={props.showAllProducts}
        sortPriceAscending={props.sortPriceAscending}
        sortPriceDescending={props.sortPriceDescending}
      />
      <div data-testid="cards-container" className="cards-container">
        {cardElements}
      </div>
    </section>
  );
}

export default Shop;
