import React from 'react';
import './SponsorsSection.css';
import sponsorLogo1 from '../assets/sponsors/codecrafters.png';
import sponsorLogo2 from '../assets/sponsors/xyz.png';
import sponsorLogo3 from '../assets/sponsors/interviewcake.png';
import sponsorLogo4 from '../assets/sponsors/wolfram.png';

const SponsorsSection = () => {
  return (
    <section className="sponsors-section" id="sponsors">
      <h2>Our Sponsors</h2>
      <p>Thank you to our amazing sponsors for helping make this event possible.</p>

      {/* Platinum */}
      <div className="sponsor-tier platinum">
        <h3 className="tier-title">Platinum</h3>
        <div className="sponsors-logos">
          <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer" aria-label="Wolfram">
            <img src={sponsorLogo4} alt="Wolfram logo" className="sponsor-logo" loading="lazy" />
          </a>
        </div>
      </div>

      {/* Gold */}
      <div className="sponsor-tier gold">
        <h3 className="tier-title">Gold</h3>
        <p className="coming-soon">Coming Soon</p>
      </div>

      {/* Silver */}
      <div className="sponsor-tier silver">
        <h3 className="tier-title">Silver</h3>
        <div className="sponsors-logos">
          <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer" aria-label="Codecrafters">
            <img src={sponsorLogo1} alt="Codecrafters logo" className="sponsor-logo" loading="lazy" />
          </a>
          <a href="https://gen.xyz" target="_blank" rel="noopener noreferrer" aria-label=".XYZ">
            <img src={sponsorLogo2} alt=".XYZ logo" className="sponsor-logo" loading="lazy" />
          </a>
          <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer" aria-label="Interview Cake">
            <img src={sponsorLogo3} alt="Interview Cake logo" className="sponsor-logo" loading="lazy" />
          </a>
        </div>
      </div>

      {/* Bronze */}
      <div className="sponsor-tier bronze">
        <h3 className="tier-title">Bronze</h3>
        <p className="coming-soon">Coming Soon</p>
      </div>
    </section>
  );
};

export default SponsorsSection;
