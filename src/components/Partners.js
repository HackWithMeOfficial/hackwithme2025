import React from 'react';
import './Partners.css';
import { motion } from 'framer-motion';
import codecraftersLogo from '../assets/codecrafters.png';
import axureLogo from '../assets/axure.png';
import techinikaLogo from '../assets/techinika.png';
import cakelogo from '../assets/interviewcake.png';
import xyzlogo from '../assets/xyz.png';

const Partners = () => {
  const partners = [
    { id: 1, logo: techinikaLogo, alt: 'Techinika', link: 'https://techinika.co.rw/' },
    { id: 2, logo: cakelogo, alt: 'Axure', link: 'https://www.interviewcake.com/' },
    { id: 3, logo: xyzlogo, alt: '.XYZ', link: 'https://gen.xyz/' },
    { id: 4, logo: codecraftersLogo, alt: 'Codecrafters', link: 'https://codecrafters.io/' },
    { id: 5, logo: axureLogo, alt: 'Axure', link: 'https://www.axure.com/' },
  ];

  return (
    <section className="partners-section" id="partners">
      <h1 className="partners-title">Our Sponsors</h1>
      <div className="partners-container">
        {partners.map((partner) => (
          <motion.div
            className="partner-box"
            key={partner.id}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={partner.link} target="_blank" rel="noopener noreferrer" className="partner_a">
              <img src={partner.logo} alt={partner.alt} className="partner-logo" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
