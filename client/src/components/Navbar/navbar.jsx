import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
        <Link className="link" to="/">
            <img src="public/images/logo.png" alt="AquaForce" style={{ height: '50px' }} />
              </Link>
        </div>
        
        <div className="right">
        <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/swimmingpaddle">Swimming paddle</Link>
          </div>
          {/* <div className="item">
            <Link className="link" to="/products/1">Our partners</Link>
          </div> */}
        
          <div className="item">
            <Link className="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">Contact</Link>
          </div>
          {/* <div className="item">
            <Link className="link" to="/">Become a partner</Link>
          </div> */}
          <div className="item">
            <img src="public/images/EN.png" alt="" style={{ width: '20px' }} />
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;