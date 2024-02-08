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
            <div className="logo">
              <img src="images/logo.png" alt="AquaForce" style={{ width: "25%" }} />
            </div>
          </Link>
        </div>
        
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/swimmingpaddle">Swimmingpaddle</Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">Contact</Link>
          </div>
          <div className="item">
            <img src="public/images/EN.png" alt="" style={{ width: "3vw" }} />
            <ArrowDropDownIcon style={{ width: "3vw" }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
