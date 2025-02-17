import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Hack With Me 2025</h1>
      <h3>August 16-17, 2025 <span>In-person event</span></h3>
      <p>
        300 spots are still available for this exciting 2-day hackathon. Register now, deadline on <span>August 5, 2025</span>.
      </p>
      <a href="https://lu.ma/b7vrg6t4" className="register-button">
        <span className="arrow">➔</span> Register now
      </a>
      <a href="mailto:hello@hackwithme2025.com" className="sponsor-link">
        Want to sponsor or organize Hack With Me in your community?
      </a>
    </div>
  );
};

export default HeroSection;
