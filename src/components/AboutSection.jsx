import React, { useState, useEffect, useCallback } from "react";
import "./AboutSection.css";
import { FaDiscord } from "react-icons/fa";

const AboutSection = () => {
  const registrationDeadline = new Date("2025-08-08T23:59:59").getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = registrationDeadline - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [registrationDeadline]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <h2>About</h2>
          <p>
            Hack With Me is an annual 24-Hours coding hackathon designed for high schoolers. Students come together to build projects, solve problems, and share their skills with others.
          </p>
          <p>
            The goal of Hack With Me is to make hackathons accessible to everyone. This year, we aim to bring together 300 students to share their ideas and showcase their talents. If you are interested in sponsoring us, volunteering, or joining our team, please email us at {" "}
            <a href="mailto:hello@hackwithme2025.com" className="email-link">hello@hackwithme2025.com</a>.
          </p>

          <div className="countdown">
            <h3>Registration Closes In</h3>
            <div className="timer">
              <div className="time-box">
                <span>{timeLeft.days}</span>
                <p>Days</p>
              </div>
              <div className="time-box">
                <span>{timeLeft.hours}</span>
                <p>Hours</p>
              </div>
              <div className="time-box">
                <span>{timeLeft.minutes}</span>
                <p>Minutes</p>
              </div>
              <div className="time-box">
                <span>{timeLeft.seconds}</span>
                <p>Seconds</p>
              </div>
            </div>
          </div>

          <div className="venue">
            <h3>Location</h3>
            <p>Our event will take place at <strong>Kigali Independent University</strong> in <strong>Gisozi</strong>, located at <strong>102 KG 14 Ave, Kigali</strong></p>
          </div>
          <a href="https://discord.gg/rpsY54CDjF" target="_blank" rel="noopener noreferrer" className="discord-button">
            <FaDiscord className="discord-icon" /> Join Our Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
