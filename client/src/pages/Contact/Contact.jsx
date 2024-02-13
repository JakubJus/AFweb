import './Contact.scss';
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import ContactUs from "./ContactUs";

const About = () => {
  const { t } = useTranslation(); // Access translation functions

  const teamMembers = [
    {
      id: 1,
      name: t('team.members.jakub.name'), // Fetch translated name using t()
      image: './images/JakubJ.jpg',
      number: '(+46) 0760293682',
      email: 'jakubj@kth.se',
      description: t('team.members.jakub.description'), // Fetch translated description
      position: t('team.members.jakub.position'), // Fetch translated position
      linkedin: 'https://www.linkedin.com/in/jakub-juszkiewicz-05196b262/',
    }
  ];

  return (
    <div className="cent">
      <div>
        <h1>{t('team.title')}</h1> {/* Fetch translated title */}
        <div className="team-members-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <img src={member.image} alt={member.name} />
              <div className="member-details">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.description}</p>
                <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
                <p>{t('team.members.jakub.phoneNumber')}: {member.number}</p> {/* Fetch translated phone number */}
                <p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="./images/LinkedIn.png" alt="LinkedIn Logo" style={{ height: '40px', width: '40px' }} />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <ContactUs/>
      </div>
    </div>
  );
};

export default About;
