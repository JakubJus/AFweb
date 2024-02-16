import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navbar.scss";
import EN from '/images/EN.png';
import SWE from '/images/SWE.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <Link className="link" to="/">
              <div className="logo">
                <img src="images/logo.png" alt="AquaForce" style={{ width: "30%" }} />
              </div>
            </Link>
          </div>
          
          <div className="right">
            <div className="item">
              <Link className={`link ${location.pathname === "/swimmingpaddle" ? "active" : ""}`} to="/swimmingpaddle">{t('swimmingpaddle')}</Link>
            </div>
            <div className="item">
              <Link className={`link ${location.pathname === "/about" ? "active" : ""}`} to="/about">{t('about')}</Link>
            </div>
            <div className="item">
              <Link className={`link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">{t('contact')}</Link>
            </div>
            <div className="item">
              <img src={EN} alt="English" style={{ width: "2vw", opacity: i18n.language === "en" ? 1 : 0.5, paddingRight: "5px" }} onClick={() => toggleLanguage('en')} />
              <img src={SWE} alt="Swedish" style={{ width: "2vw", opacity: i18n.language === "sw" ? 1 : 0.5 }} onClick={() => toggleLanguage('sw')} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;