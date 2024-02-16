import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './About.scss';
import Timeline from '../../timeline/Timeline';

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

    const handleLinkClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href) {
            window.open(href, '_blank');
        }
    };
    
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
        <div className="cent">
            <div className="head">
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
                <a href="https://www.kth.se/om/innovation" onClick={handleLinkClick} className="link">
    <img src="./images/innovation.jpg" alt="Partner 1" />
</a>
            </div>

            <Timeline/>
        </div>
    );
};

export default About;