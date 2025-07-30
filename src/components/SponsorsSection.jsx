import React from 'react';
import './SponsorsSection.css';
import sponsorLogo1 from '../assets/sponsors/codecrafters.png';
import sponsorLogo2 from '../assets/sponsors/xyz.png';
import sponsorLogo3 from '../assets/sponsors/interviewcake.png';
import sponsorLogo4 from '../assets/sponsors/ULK LOGO.jpg';
import sponsorLogo5 from '../assets/sponsors/thelinuxfoundation.png';
import sponsorLogo6 from '../assets/sponsors/sentry.png';
import sponsorLogo7 from '../assets/sponsors/Inspector-Planet-Black.jpeg';
import sponsorLogo8 from '../assets/sponsors/dreamizeafrica.png';
import sponsorLogo9 from '../assets/sponsors/github-education.png';
import sponsorLogo10 from '../assets/sponsors/Umurava.png';

const SponsorsSection = () => {
  return (
    <section className="sponsors-section" id="sponsors">
      <h2>Sponsors</h2>
      <div className="sponsors-grid">
        <a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener noreferrer" aria-label="The Linux Foundation">
          <img src={sponsorLogo5} alt="The Linux Foundation logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://github.com/education" target="_blank" rel="noopener noreferrer" aria-label="Github Edcucation">
          <img src={sponsorLogo9} alt="Github Education Logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://sentry.io/" target="_blank" rel="noopener noreferrer" aria-label="Sentry">
          <img src={sponsorLogo6} alt="Sentry logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://ulk.ac.rw/" target="_blank" rel="noopener noreferrer" aria-label="ULK">
          <img src={sponsorLogo4} alt="ULK logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://umurava.africa/" target="_blank" rel="noopener noreferrer" aria-label="Umurava">
          <img src={sponsorLogo10} alt="Umurava logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://inspectorplanet.com/" target="_blank" rel="noopener noreferrer" aria-label="Inspector Planet">
          <img src={sponsorLogo7} alt="Inspector Planet logo" className="sponsor-logo" loading="lazy" />
        </a>
        <a href="https://dreamizeafrica.com/" target="_blank" rel="noopener noreferrer" aria-label="Dreamize Africa">
          <img src={sponsorLogo8} alt="Dreamize Africa logo" className="sponsor-logo" loading="lazy" />
        </a>
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
    </section>
  );
};

export default SponsorsSection;
