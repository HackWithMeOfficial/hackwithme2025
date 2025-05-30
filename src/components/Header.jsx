import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleInternalLink = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-icon ${isOpen ? 'open' : ''}`}></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('schedule');
              }}
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#sponsors"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('sponsors');
              }}
            >
              Sponsors
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('faq');
              }}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                handleInternalLink('team');
              }}
            >
              Team
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;