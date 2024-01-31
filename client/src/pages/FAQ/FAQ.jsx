import React from 'react';
import { useState } from 'react';
import { Collapse } from 'antd';
import './FAQPage.scss';
import { Link } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const { Panel } = Collapse;



const FAQ = () => {
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelChange = (key) => {
    setActivePanel(key);
  };
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <Collapse accordion activeKey={activePanel} onChange={handlePanelChange}>
        <Panel header="What is AquaForce?" key="1">
          <p>AquaForce is a Startup working for the swiming industry, we are developing new products for athletes and daily swimmers who havent a coach</p>
        </Panel>
        <Panel header="Why should I use AquaForce?" key="2">
          <p>AquaForce is helping you todevelop your swimming faster, our fouders have spoted the gap in swimming were athelts didnt progres at a certain point...or  it took  to much time to progress for them. AquaForce can help you archive your goals in swimming much faster.</p>
        </Panel>
        <Panel header="I cant swim, can I use AquaForce?" key="3">
          <p>You can use our second version of our paddle wich is still developed, you  will have the possiblity to develop your swimming</p>
        </Panel>
        <Panel header="How can I partner/register for Aquaforce product" key="4">
          <p>Please contact us, or  leave us a message, you can go to <Link className="link" to="/contact">Contact page <LinkIcon /></Link></p>
        </Panel>
        <Panel header="Were is AquaForce based" key="5">
          <p>AquaForce is currently based in Stockholm</p>
        </Panel>
        <Panel header="What data can we get from AquaForce" key="6">
          <p>We measure with the paddle the force and much more other paramethers that we calculate.</p>
        </Panel>
        <Panel header="Why do I need to measure myself" key="7">
          <p>You can easly track your progress and see what you can do better when you swim</p>
        </Panel>
        <Panel header="Where can i find AquaForce swimmingpaddle?" key="8">
          <p>AquaForce is still under development,if youre intressted in buying a product/investing or partnering up please <Link className="link" to="/contact">Contact us <LinkIcon /></Link></p>
        </Panel>
        <Panel header="Im intressted to  work at AquaForce who should i contact?" key="9">
        <p>Please contact us, or  leave us a message, you can go to <Link className="link" to="/contact">Contact page <LinkIcon /></Link></p>
        </Panel>
      </Collapse>
      <div className="ask-us-section">
        <p>
          <span>Still have questions? Ask us!</span>
          <Link to="/contact" className="contact-link">
            <OpenInNewIcon  /> {/* Icon here */}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FAQ;