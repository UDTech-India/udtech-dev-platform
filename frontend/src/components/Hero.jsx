import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span></span>
          Developer Learning Platform
        </div>

        <h1 className="hero-title">
          Welcome to <span className="highlight">UDTech</span> Dev Platform
        </h1>

        <p className="hero-subtitle">
          Your one-stop destination for all things development. Explore resources,
          tools, and a vibrant community to accelerate your coding journey.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started →</button>
          <button className="btn btn-secondary">Explore Resources</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
