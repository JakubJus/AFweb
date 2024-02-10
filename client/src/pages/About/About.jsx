import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './About.scss';

const About = () => {
    const partnersRef = useRef();
    const { t } = useTranslation(); // Access translation functions

    useEffect(() => {
        const partnersSection = partnersRef.current;

        const handleAnimationIteration = () => {
            partnersSection.classList.toggle('rollingX');
            partnersSection.classList.toggle('rollingY');
        };

        partnersSection.addEventListener('animationiteration', handleAnimationIteration);

        return () => {
            partnersSection.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    const missionVisionGoals = [
        {
            title: t('About.mission'),
            content: t('About.missionContent'),
        },
        {
            title: t('About.vision'),
            content: t('About.visionContent'),
        },
        {
            title: t('About.goals'),
            content: t('About.goalsContent'),
        },
    ];

    return (
        <div>
            <div className="header">
                <h1 className="title">{t('About.title')}</h1>
                <p className="subtitle">{t('About.subtitle')}</p>
            </div>
            
            <div className="mission-vision-goals">
                {missionVisionGoals.map((element, index) => (
                    <div key={index} className="mission-vision-goal">
                        <h2>{element.title}</h2>
                        <p>{element.content}</p>
                    </div>
                ))}
            </div>

            <div ref={partnersRef} className="partners-section rollingX">
                <h2>{t('About.partners')}</h2>
                <img src="./images/innovation.png" alt="Partner 1" />
            </div>

            <h2 className='timeline'>
                <Link className="link" to="/timeline">
                    {t('About.timeline')}
                    
                </Link>
                <Link to="/timeline">
                    <LinkIcon />
                </Link>
                
            </h2>
        </div>
    );
};

export default About;