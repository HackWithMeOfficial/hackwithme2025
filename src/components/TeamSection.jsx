import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './TeamSection.css';
import image1 from '../assets/team/chaste.jpg';
import image2 from '../assets/team/bonheur.jpg';
import image3 from '../assets/team/kyungjin.png';
import image4 from '../assets/team/kevin.jpg';
import image5 from '../assets/team/regis.jpg';

const teamMembers = [
  {
    name: 'Shyaka Chaste',
    role: 'Founder & Lead organizer',
    linkedin: 'https://www.linkedin.com/in/shyakachaste',
    img: image1,
  },
  {
    name: 'Bonheur Iraguha',
    role: 'Lead organizer',
    linkedin: 'https://www.linkedin.com/in/bonheur-iraguha-150894256/',
    img: image2,
  },
  {
    name: 'Kyungjin Oh',
    role: 'Lead organizer',
    linkedin: 'https://www.linkedin.com/in/kyungjinohofficial/',
    img: image3,
  },
  {
    name: 'Rukundo Kevin',
    role: 'Lead organizer',
    linkedin: 'https://www.linkedin.com/in/rukundokevin/',
    img: image4,
  },
    {
    name: 'Kayitare Regis',
    role: 'Graphic Designer',
    linkedin: 'https://www.linkedin.com/in/kayitare-regis-b91b27356/',
    img: image5,
  },
  
];

const TeamSection = () => {
  return (
    <div className="team-section" id="team">
      <h2 className="team-heading">Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} className="team-img" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
              <FaLinkedin />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;