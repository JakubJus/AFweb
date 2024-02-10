import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navbar.scss";
import EN from './images/EN.png';
import SWE from './images/SWE.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const toggleLanguage = (lng) => {
    i18n.changeLanguage(lng);
    toggleDropdown();
  };

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <Link className="link" to="/">
              <div className="logo">
                <img src="images/logo.png" alt="AquaForce" style={{ width: "25%" }} />
              </div>
            </Link>
          </div>
          
          <div className="right">
            
            <div className="item">
              <Link className="link" to="/swimmingpaddle">{t('swimmingpaddle')}</Link>
            </div>
            <div className="item">
              <Link className="link" to="/about">{t('about')}</Link>
            </div>
            <div className="item">
              <Link className="link" to="/contact">{t('contact')}</Link>
            </div>
            <div className="item">
              <img src={i18n.language === "en" ? EN : SWE} alt="" style={{ width: "2vw" }} />
              <button className="icon-button" onClick={toggleDropdown}>
                <ArrowDropDownIcon style={{ width: "3vw" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="dropdown-content">
          <ul>
            <div className="link">
            <li onClick={() => toggleLanguage('en')}>{t('english')}</li>
            </div>
            <div className="link">
            <li onClick={() => toggleLanguage('sw')}>{t('swedish')}</li>
            </div>
          </ul>
          
        </div>
      )}
    </>
  );
}

export default Navbar;
