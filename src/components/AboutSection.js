import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <h2>About</h2>
          <p>
            Hack With Me is an annual 2-day coding hackathon designed for high schoolers. Students come together to build projects, solve problems, and share their skills with others, taking place every August.
          </p>
          <p>
            The goal of Hack With Me is to make hackathons accessible to everyone. That’s why this year, we aim to bring together 300+ students to share their ideas and showcase their talents. If you’re interested in organizing Hack With Me in your community (or country), please contact us using the link above or email us at{" "}
            <a href="mailto:hello@hackwithme2025.com" className="sponsor-link">hello@hackwithme2025.com</a>.
          </p>

          <div className="venue">
            <h3>Location</h3>
            <div className="location-info">
              <p>Our event will be held at a modern venue in Kigali, Rwanda. Stay tuned for more details!</p>
              <div className="location-map">
                <iframe
                  title="Venue Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.60532802224!2d29.96242731520134!3d-1.9294194478840436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1740164137444!5m2!1sen!2srw"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
