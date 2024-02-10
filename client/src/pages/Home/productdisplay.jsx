import React, { useState } from "react";
import "./productdisplay.scss";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="text-container" id="text-container">
      <div>
        <h1 className="underline" id="underline">Our Products</h1>
        <Link className="link2" to="/swimmingpaddle">
        <h2>AquaForce Swimming paddle</h2>
        <div>Our first product for better coaching and imporvment of technique, developed in 2022 has the basic functions of our paddle<span className="Read"> Readmore...</span></div>
        </Link>
      </div>
        
        <div
          className="product"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
            <Link className="link" to="/swimmingpaddle">
          {isHovered ? (
            <video
              autoPlay
              loop
              muted
              src="/videos/hoverover.mp4" // Replace with your video file
              className="product-media"
            />
          ) : (
            <img src="images/frontTest.png" alt="Product 1" className="product-media" />
          )}
            </Link>
        </div>
    
    </div>
  );
};

export default ProductDisplay;