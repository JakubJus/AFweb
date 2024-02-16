import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./productdisplay.scss";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="centHome">
      <div className="text-container" id="text-container">
        <div>
          <h1 className="underline" id="underline">{t("products.ourProducts")}</h1>
          <Link className="link2" to="/swimmingpaddle">
            <h2>{t("products.aquaForceSwimmingPaddle")}</h2>
            <div>{t("products.description")}<span className="Read"> {t("readMore")}</span></div>
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
    </div>
  );
};

export default ProductDisplay;