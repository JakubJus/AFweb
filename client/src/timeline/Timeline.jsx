import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "./Timeline.scss"


const Timeline = () => {
  return (
    <div>
    <h1>AquaForce Timeline</h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022/04"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">First idea</h3>
        <h4 className="vertical-timeline-element-subtitle">Location: Stockholm, Sweden</h4>
        <p>
          The company idea and the need of the product were determinated and first step towards the swimpaddle were taken.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022/06"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">First parner</h3>
        <h4 className="vertical-timeline-element-subtitle">KTH Innovation</h4>
        <p>
        AquaForce get to partner up with KTH innovation
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022/08"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">First prototype</h3>
        <h4 className="vertical-timeline-element-subtitle">AquaForce p00</h4>
        <p>
          Our first prototype is created.
        </p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023/02"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Website creation</h3>
        <h4 className="vertical-timeline-element-subtitle">webpage</h4>
        <p>
          Our webpage is created. 
        </p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
    </div>
  );
};

export default Timeline;