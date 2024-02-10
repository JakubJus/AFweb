import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import './About.scss';

const About = () => {
    const partnersRef = useRef();

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
            title: "Our Mission",
            content: "We develop  our company so others can have easier to work towards small goals",
        },
        {
            title: "Our Vision",
            content: "Our mission is to work towards a sport where everyone has the same opporunies and giving the chance toeveryone to start to swim nomatter the age. We work towards a more healthier and enhusastic society. We belive that sport and society should stand togher.",
        },
        {
            title: "Our Goals",
            content: "We want more people in the sport and ofcourse more athlet swimmers that can archive quicker times. Our goal is to help as many people who wants to get better and dont find a way how to imporve with a faster pace",
        },
    ];

    return (
        <div>
            <div className="header">
                <h1 className="title">About Us</h1>
                <p className="subtitle">Discover our story and mission</p>
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
                <h2> Our partners </h2>
                {/* Add images here that move on a rollX and rollY */}
                {/* Example: */}
                <img src="./images/innovation.png" alt="Partner 1" style={{ width: '120px' }} />
                {/* Add more images as needed */}
            </div>

            <h2 className='timeline'>
                <Link className="link" to="/timeline">
                    Our timeline 
                    <LinkIcon />
                </Link>
            </h2>
        </div>
    );
};

export default About;
