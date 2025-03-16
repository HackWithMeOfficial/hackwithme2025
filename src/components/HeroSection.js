import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Hack With Me 2025</h1>
      <h2>August 16-17, 2025 <span>In-person event in Kigali</span></h2>
      <p>
        Join 300+ students for an exciting 2-day hackathon! Collaborate, build projects, and compete. Register now before the deadline on <strong>August 5, 2025</strong>.
      </p>
      <a href="https://lu.ma/b7vrg6t4" className="register-button" title="Register for Hack With Me 2025" target="_blank" rel="noopener noreferrer">
        <span className="arrow">➔</span> Register now
      </a>
      <a href="mailto:hello@hackwithme2025.com" className="sponsor-link" title="Get Involved with Hack With Me 2025">
        Want to sponsor or volunteer for Hack With Me? Reach out to us!
      </a>

    </div>
  );
};

export default HeroSection;
