import React from "react";
import './home.css';

function Home({ setPage }) {
  return (
    <div className="home">
      <section className="landing-page">
        <h2>Welcome to the Plant Store</h2>
        <p>Your one-stop shop for beautiful houseplants!</p>
        <button className="get-started" onClick={() => setPage('products')}>
          Get Started
        </button>
      </section>
    </div>
  );
}


export default Home;