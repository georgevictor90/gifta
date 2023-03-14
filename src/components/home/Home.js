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
        <p>
          Welcome to Gifta, the online shop for premium gifts that are sure to
          impress. Our carefully curated selection includes everything from
          high-quality clothing and exquisite jewelry to cutting-edge
          electronics and more. Whether you're shopping for a special occasion
          or just looking to treat yourself, we have the perfect gift for you.
        </p>
        <p>
          At Gifta, we are committed to offering our customers the best possible
          shopping experience.
        </p>
        <p>
          We pride ourselves on our exceptional customer service, fast and
          reliable shipping, and our unwavering dedication to quality. All of
          our products are sourced from top brands and manufacturers, ensuring
          that you receive only the best. From classic pieces to the latest
          trends, we have something for everyone. Thank you for choosing Gifta
          for all of your gifting needs. Shop with us today and discover the
          perfect gift that will make a lasting impression.
        </p>
        <p>When you're part of it, you put your heart into it.</p>
        <p>
          We go above and beyond to offer quality products and outstanding
          service to the people who matter most - you, our customers.
        </p>
      </div>
    </section>
  );
}

export default Home;
