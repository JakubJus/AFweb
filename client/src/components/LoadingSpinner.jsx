import React, { useState, useEffect } from "react";
import "./LoadingSpinner.scss"; 

const LoadingSpinner = () => {
  const [isEffectStarted, setIsEffectStarted] = useState(true); 

  useEffect(() => {
    if (!isEffectStarted) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
    const originalText = "LOADING";
    let iterations = 0;

    const interval = setInterval(() => {
      const newText = Array.from({ length: originalText.length }, (_, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      }).join('');

      iterations += 1 / 4;
      if (iterations > originalText.length) {
        clearInterval(interval);
      }
    
      setRandomText(newText);
    }, 60);

    return () => clearInterval(interval);
  }, [isEffectStarted]); 

  const [randomText, setRandomText] = useState("LOADING");

  return (
    <div className="loading-spinner-container">
      <h1 className="loading-text">{randomText}</h1>
      <div className="loading-spinner"></div>
    </div>
 
  );
};

export default LoadingSpinner;