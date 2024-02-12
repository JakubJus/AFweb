import React, { useState, useEffect } from "react";
import "./home.scss";
import SouthIcon from '@mui/icons-material/South';
import { Link } from "react-scroll";
import ProductDisplay from "./productdisplay"; // Import the new component

const Home = () => {
  const [isTextScrolling, setIsTextScrolling] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const homeContainer = document.querySelector(".home-container");
    const textContainer = document.querySelector(".text-container");

    if (homeContainer && textContainer) {
      const homeBottom = homeContainer.offsetTop + homeContainer.offsetHeight;

      setIsTextScrolling(scrollY > homeBottom - window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToNext = () => {
    const textContainer = document.querySelector(".text-container");
    if (textContainer) {
      textContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="cent">
    <div className={`home-container ${isTextScrolling ? "text-scrolling" : ""}`}>
      <div className="video-container">
        <video
          src="/videos/AF_promo_final.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="scroll" onClick={scrollToNext}>
        <Link to="text-container" smooth={true} duration={1000}>
          <SouthIcon />
        </Link>
      </div>
      
    </div>
    <div className="test-container">
    <ProductDisplay /> 
    </div>
    </div>
    </>

  );
};

export default Home;
