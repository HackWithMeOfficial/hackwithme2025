import React from 'react';
import './SponsorsSection.css';
import sponsorLogo1 from '../assets/sponsors/codecrafters.png';
import sponsorLogo2 from '../assets/sponsors/xyz.png';
import sponsorLogo3 from '../assets/sponsors/interviewcake.png';
import sponsorLogo4 from '../assets/sponsors/wolfram.png';
import sponsorLogo5 from '../assets/sponsors/thelinuxfoundation.png';
import sponsorLogo6 from '../assets/sponsors/sentry.png';
import sponsorLogo7 from '../assets/sponsors/aops.png';

const SponsorsSection = () => {
  return (
    <section className="sponsors-section" id="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsors-grid">
      <a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="The Linux Foundation">
          <img src={sponsorLogo5} alt="The Linux Foundation logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer" aria-label="Wolfram">
          <img src={sponsorLogo4} alt="Wolfram logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://sentry.io/" target="_blank" rel="noopener noreferrer" aria-label="Sentry">
          <img src={sponsorLogo6} alt="Sentry logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer" aria-label="Codecrafters">
          <img src={sponsorLogo1} alt="Codecrafters logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://www.interviewcake.com" target="_blank" rel="noopener noreferrer" aria-label="Interview Cake">
          <img src={sponsorLogo3} alt="Interview Cake logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://gen.xyz" target="_blank" rel="noopener noreferrer" aria-label=".XYZ">
          <img src={sponsorLogo2} alt=".XYZ logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://artofproblemsolving.com/" target="_blank" rel="noopener noreferrer" aria-label="AoPS">
          <img src={sponsorLogo7} alt="AoPS logo" className="sponsor-logo" loading="lazy" />
        </a>
      </div>
    </section>
  );
};

export default SponsorsSection;
