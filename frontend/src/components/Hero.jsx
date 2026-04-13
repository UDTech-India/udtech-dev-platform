import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to UDTech Dev Platform</h1>
        <p className="hero-subtitle">
          Your one-stop destination for all things development. Explore resources, 
          tools, and a vibrant community to enhance your coding journey.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </div>
  );
};

export default Hero;
