import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Hack With Me. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram-icon" />
        </a>
        <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github-icon" />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
      </div>
      <a href="/code-of-conduct" className="code-of-conduct-link">Code of Conduct</a>
      <p className="created-by">
        Created with <FaHeart className="heart-icon" /> by <a href="https://shyakachaste.com" target="_blank" rel="noopener noreferrer">Shyaka Chaste</a>
      </p>
    </footer>
  );
};

export default Footer;