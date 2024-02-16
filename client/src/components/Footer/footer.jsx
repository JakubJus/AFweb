import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Our products</h1>
                    <span>
                    <Link className="link" to="/swimmingpaddle">
                            AquaForce paddle 
                        </Link>
                        </span>
                    {/* <span>Accessories</span> */}
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>
                        <Link className="link" to="/FAQ">
                            FAQ
                        </Link>
                    </span>
                    {/* <span>Pages</span>
                    <span><Link className="link" to="/CookiesPrivacyPage">Cookies</Link></span> */}
                </div>
                <div className="item">
                <Link className="link" to="/about">
                    <h1>About</h1>
                    <span>
                        Our development started in 2023. We work towards your goals
                        to become faster with AquaForce and enjoy the LIGHT workout.
                    </span>
                </Link>
                </div>
                <div className="item">
                <Link className="link" to="/contact">
                    <h1>Contact</h1>
                    <span>
                        Reach us if you have questions; you can find our contact information in the Contact section.
                    </span>
                    </Link>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">
                        <img src="images/small_logo.png" alt="AquaForce" style={{ height: '50px' }} />
                    </span>
                    <span className="copyright">© Copyright 2023. All Rights Reserved.</span>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
