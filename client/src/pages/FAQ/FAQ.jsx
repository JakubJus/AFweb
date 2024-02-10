import React from 'react';
import { useState } from 'react';
import { Collapse } from 'antd';
import './FAQPage.scss';
import { Link } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const { Panel } = Collapse;

const FAQ = () => {
  const { t } = useTranslation(); // Access translation functions
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelChange = (key) => {
    setActivePanel(key);
  };

  return (
    <div className="faq-container">
      <h1>{t('faq.title')}</h1>
      <Collapse accordion activeKey={activePanel} onChange={handlePanelChange}>
        <Panel header={t('faq.question1')} key="1">
          <p>{t('faq.answer1')}</p>
        </Panel>
        <Panel header={t('faq.question2')} key="2">
          <p>{t('faq.answer2')}</p>
        </Panel>
        <Panel header={t('faq.question3')} key="3">
          <p>{t('faq.answer3')}</p>
        </Panel>
        <Panel header={t('faq.question4')} key="4">
          <p>{t('faq.answer4')}<Link className="link" to="/contact">{t('faq.contactLink')} </Link><Link><LinkIcon /></Link></p>
        </Panel>
        <Panel header={t('faq.question5')} key="5">
          <p>{t('faq.answer5')}</p>
        </Panel>
        <Panel header={t('faq.question6')} key="6">
          <p>{t('faq.answer6')}</p>
        </Panel>
        <Panel header={t('faq.question7')} key="7">
          <p>{t('faq.answer7')}</p>
        </Panel>
        <Panel header={t('faq.question8')} key="8">
          <p>{t('faq.answer8')}<Link className="link" to="/contact">{t('faq.contactLink')} </Link><Link><LinkIcon /></Link></p>
        </Panel>
        <Panel header={t('faq.question9')} key="9">
          <p>{t('faq.answer9')}<Link className="link" to="/contact">{t('faq.contactLink')} </Link><Link><LinkIcon /></Link></p>
        </Panel>
      </Collapse>
      <div className="ask-us-section">
        <p>
          <span>{t('faq.stillHaveQuestions')}</span>
          <Link to="/contact" className="contact-link">
            <OpenInNewIcon /> {/* Icon here */}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FAQ;