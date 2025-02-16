import React from 'react';
import './SponsorsSection.css';
import sponsorLogo1 from '../assets/sponsors/codecrafters.png';
import sponsorLogo2 from '../assets/sponsors/xyz.png';
import sponsorLogo3 from '../assets/sponsors/interviewcake.png';

const SponsorsSection = () => {
  return (
    <div className="sponsors-section" id="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsors-logos">
        <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer">
          <img src={sponsorLogo1} alt="Codecrafters" className="sponsor-logo" />
        </a>
        <a href="https://gen.xyz" target="_blank" rel="noopener noreferrer">
          <img src={sponsorLogo2} alt=".XYZ" className="sponsor-logo" />
        </a>
        <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer">
          <img src={sponsorLogo3} alt="Interview Cake" className="sponsor-logo" />
        </a>
      </div>
    </div>
  );
};

export default SponsorsSection;