import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedin, FaHeart, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Hack With Me. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/hackwithme_official" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram-icon" />
        </a>
        <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github-icon" />
        </a>
        <a href="https://www.linkedin.com/company/hack-with-me/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="mailto:hello@hackwithme2025.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon email-icon" />
        </a>
      </div>
      <a href="/" className="code-of-conduct-link">Code of Conduct</a>
      <p className="created-by">
        Created with <FaHeart className="heart-icon" /> by <a href="https://shyakachaste.com" target="_blank" rel="noopener noreferrer">Shyaka Chaste</a>
      </p>
    </footer>
  );
};

export default Footer;