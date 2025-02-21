import React from 'react';
import './SponsorsSection.css';
import sponsorLogo1 from '../assets/sponsors/codecrafters.png';
import sponsorLogo2 from '../assets/sponsors/xyz.png';
import sponsorLogo3 from '../assets/sponsors/interviewcake.png';

const SponsorsSection = () => {
  return (
    <section className="sponsors-section" id="sponsors" aria-labelledby="sponsors-heading">
      <h2 id="sponsors-heading">Sponsors</h2>
      <div className="sponsors-logos">
        <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer" aria-label="Codecrafters">
          <img src={sponsorLogo1} alt="Codecrafters logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://gen.xyz" target="_blank" rel="noopener noreferrer" aria-label=".XYZ">
          <img src={sponsorLogo2} alt=".XYZ logo " className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer" aria-label="Interview Cake">
          <img src={sponsorLogo3} alt="Interview Cake logo " className="sponsor-logo" loading="lazy" />
        </a>
      </div>
    </section>
  );
};

export default SponsorsSection;
