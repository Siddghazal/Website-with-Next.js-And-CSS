import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container hero-container">
        <div>
          <p className="hero-text">Shop Our Freshest</p>
          <h2 className="hero-heading">
            Fresh Hand-Picked Vegetables
            <br />
            <span>Everyday</span>
            
          </h2>
          <a className="hero-link" href="#">
             Discover More
          </a>
           
        </div>
        

        <div className="hero-image">
          <img src="/veg_basket.png" alt="veg basket" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
