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
        Hack With Me is an annual 2-day coding hackathon designed for high schoolers or recent graduates. Students come together to build projects, solve problems, and share their skills with others.
        </p>
      </div>
      <div className="faq-card">
        <h3>Do I need to be an expert in coding to join?</h3>
        <p>
          No! you don’t need to be an expert, having some coding knowledge will help you contribute to a project.
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
      <div className="faq-card">
        <h3>Is there a participation fee?</h3>
        <p>
          No, Hack With Me is completely free! We believe in making hackathons accessible to everyone, so there are no registration or participation fees.
        </p>
     </div>
     <div className="faq-card">
        <h3>Can I organize Hack With Me in my community?</h3>
        <p>
          Yes! If you're interested in organizing Hack With Me in your community or country, we'd love to support you.  
          Please contact us at <a href="mailto:hello@hackwithme2025.com" className="sponsor-link">hello@hackwithme2025.com</a>.
        </p>
     </div>
    </div>
  );
};

export default FAQSection;
