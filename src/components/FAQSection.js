import React from 'react';
import './FAQSection.css';

const FAQSection = () => {
  return (
    <div className="faq-section" id="faq">
      <h2>FAQ</h2>
      <div className="faq-card">
        <h3>What is a Hackathon?</h3>
        <p>
          A hackathon is an event where people work together in teams to create something new, like an app or website, in a short amount of time (usually 1 or 2 days).
        </p>
      </div>
      <div className="faq-card">
        <h3>What is Hack With Me?</h3>
        <p>
        Hack With Me is an annual 2-day coding hackathon designed for high schoolers or students between the ages of 15-20. Students come together to build projects, solve problems, and share their skills with others.
        </p>
      </div>
      <div className="faq-card">
        <h3>Do I need to be an expert in coding to join?</h3>
        <p>
          No! Hack With Me is for everyone, no matter your skill level. It’s a great chance to learn, work with others, and grow your coding skills.
        </p>
      </div>
      <div className="faq-card">
        <h3>How can I register for the event?</h3>
        <p>
          You can register by visiting our website and filling out the registration form. We’ll send you all the details about the event once you sign up.
        </p>
      </div>
      <div className="faq-card">
        <h3>What do I need to bring to the event?</h3>
        <p>
          All you need is a laptop, a positive attitude, and your creativity. We’ll provide everything else, including food and drinks.
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
