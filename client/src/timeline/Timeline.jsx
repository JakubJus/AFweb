import React from 'react';
import "./Timeline.scss";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import en from '../locales/en.json'; // Import English translations
import sw from '../locales/sw.json'; // Import Swedish translations
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  const { t, i18n } = useTranslation(); // Access translation functions

  // Determine which translations to use based on the current language
  const translations = i18n.language === 'en' ? en : sw;
  const timeline = translations.timeline;

  return (
    <div className='cont'>
      <h1>{timeline.title}</h1>
      <VerticalTimeline className="vertical-timeline">
        {timeline.events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#555' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date={event.date}
            iconStyle={{ background: '#f15a24', color: '#fff' }} // Set color for the circle in the middle
            icon={<i className="fas fa-circle"></i>}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p className="vertical-timeline-element-location">{event.location}</p>
            <p className="vertical-timeline-element-description">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
