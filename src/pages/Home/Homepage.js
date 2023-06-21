import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title">Discover Delicious Recipes</h1>
        <p className="hero-subtitle">Explore a wide variety of recipes and bring joy to your kitchen.</p>
        <Link to="/recipes" className="cta-button">Get Started</Link>
      </div>
    </div>
  );
};

export default HomePage;
