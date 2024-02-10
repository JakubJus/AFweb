import React from 'react';

const Picture = ({ imageUrl, caption }) => {
  return (
    <div className="picture-container">
      <img src={imageUrl} alt="Image" className="picture" />
      <p className="picture-caption">{caption}</p>
    </div>
  );
};

export default Picture;