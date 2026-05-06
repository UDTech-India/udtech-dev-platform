import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import "./Hero.css";

const Hero = () => {
  const ref = useScrollAnimation();

  const stats = [
    { value: '12+',  label: 'Resources' },
    { value: '12+',  label: 'Dev Tools' },
    { value: '6',    label: 'Categories' },
    { value: '24/7', label: 'Community' },
  ];

  return (
    <div className="hero" ref={ref}>
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge reveal reveal-delay-1">
          <span className="badge-dot"></span>
          Developer Learning Platform
        </div>

        <h1 className="hero-title reveal reveal-delay-2">
          Welcome to <span className="highlight">UDTech</span><br />Dev Platform
        </h1>

        <p className="hero-subtitle reveal reveal-delay-3">
          Your one-stop destination for all things development. Explore resources,
          tools, and a vibrant community to accelerate your coding journey.
        </p>

        <div className="hero-buttons reveal reveal-delay-4">
          <button className="btn btn-primary">
            Get Started <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn-secondary">Explore Resources</button>
        </div>

        <div className="hero-stats reveal reveal-delay-5">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
