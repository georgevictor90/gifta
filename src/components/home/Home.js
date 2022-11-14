import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <ul className="order-details">
        {/* add icons for these */}
        <li>Cash on delivery</li>
        <li>Free shipment and returns</li>
        <li>100 days money back guarantee</li>
      </ul>
      <div className="hero-img">
        <div className="hero-text">
          <h1 className="home-title">Gifts for luxury lovers </h1>
          <p>
            You can never have too much of a good thing, so here’s our edit of
            extra special gifts for those who crave the finer things in life
          </p>

          <Link to="/shop">Go to Shop</Link>
        </div>
      </div>
      <div className="about-us">
        <p>When you're part of it, you put your heart into it.</p>
        <p>
          We go above and beyond to offer quality products and outstanding
          service to the people who matter most - you, our customers.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          recusandae quis repellat maiores, quos dolor sit nam nemo enim
          asperiores. Blanditiis voluptates laborum ex iure. Impedit nesciunt
          deserunt ipsum culpa quidem quibusdam hic dolorem obcaecati rerum iste
          autem error incidunt fugit, animi officia assumenda eum consequuntur
          minus corrupti quod explicabo velit cupiditate ratione. Ratione ab
          dolores, quasi nam nihil ipsa repudiandae suscipit aspernatur autem
          earum! Nemo enim ullam magni temporibus nesciunt esse quibusdam, at
          pariatur. Voluptatem, minus! Placeat, ullam deserunt?
        </p>
      </div>
    </section>
  );
}

export default Home;
