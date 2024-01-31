import React, { useState } from 'react';
import './Contact.scss';
import ContactUs from './ContactUs';

const About = () => {

  const teamMembers = [
    {
      id: 1,
      name: 'Jakub Juszkieicz',
      image: './images/JakubJ.jpg',
      number: '(+46) 0760-29 36 82',
      email: 'jakubj@kth.se',
      description: 'Main developer of AquaForce',
      position: 'CEO and CO-Founder',
      linkedin: 'https://www.linkedin.com/in/jakub-juszkiewicz-05196b262/',
    }
  ];


  return (
    <div>
    <div>
      <h1>Our Team</h1>
      <div className="team-members-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} />
            <div className="member-details">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.description}</p>
              <p>Email: <a href={`mailto:${member.email}`}>
              {member.email}
            </a></p>
              <p>Telephone number: {member.number}</p>
              <p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><img src="./images/LinkedIn.png" alt="LinkedIn Logo"style={{ height: '40px',width:'40px' }} /></a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div><br />
    <ContactUs/>
    </div>
  );
};

export default About;