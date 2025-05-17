import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Hack With Me 2025</h1>
      <h2>August 16-17, 2025 <span>In-person event in Kigali</span></h2>
      <p>
        Join 300 high schoolers for an exciting 24-Hours hackathon! Collaborate, build projects, and compete. Register now before the deadline on <strong>August 5, 2025</strong>.
      </p>
      <a href="https://lu.ma/b7vrg6t4" className="register-button" title="Register for Hack With Me 2025" target="_blank" rel="noopener noreferrer">
        <span className="arrow">➔</span> Register now
      </a>
      <a href="https://hcb.hackclub.com/donations/start/hackwithme" className="sponsor-link" title="Donate to Support Hack With Me 2025" target="_blank" rel="noopener noreferrer">
        Want to donate to make this event happen? Click this link!
      </a>
    </div>
  );
};

export default HeroSection;
