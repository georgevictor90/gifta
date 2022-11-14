import React from "react";
import Card from "../card/Card";
import Sidebar from "../sidebar/Sidebar";

function Shop(props) {
  const cardElements = props.data.map((product) => {
    return (
      <Card
        key={product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        image={product.image}
        price={product.price}
      />
    );
  });

  // console.log(cardElements);

  return (
    <section className="shop">
      <Sidebar data={props.data} />
      <div className="cards-container">{cardElements}</div>
    </section>
  );
}

export default Shop;
