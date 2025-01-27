import React from "react";
import './home.css';

function Home({ setPage }) {
  return (
    <div className="home">
      <section className="landing-page">
        <h2>Welcome to the Green Haven</h2>
        <p>Your one-stop shop for beautiful houseplants!</p>
        <p>Welcome to Green Haven, your go-to destination for fresh, vibrant plants that bring life to your home or workspace. Whether you're a seasoned plant lover or just starting your green journey, we offer a wide variety of handpicked, healthy plants to suit every taste and style. From air-purifying indoor plants to stunning outdoor greens, each of our plants is nurtured with care and delivered to your doorstep, ensuring freshness and quality.</p>
        <button className="get-started" onClick={() => setPage('products')}>
          Get Started
        </button>
      </section>
    </div>
  );
}


export default Home;