import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <h2>About</h2>
          <p>
          Hack With Me is an annual 2-day coding hackathon designed for high schoolers or recent graduates. Students come together to build projects, solve problems, and share their skills with others, taking place every August.
          </p>
          <p>
          The goal of Hack With Me is to make hackathons accessible to everyone. That’s why this year, we aim to bring together 300 students to share their ideas and showcase their talents. 
          </p>
          <div className="venue">
            <h3>Location</h3>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;