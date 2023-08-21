import React from 'react';
import '../App.css';

const ExampleCarouselImage = ({ imagePath }) => {
  return (
    <div className="carousel-image">
      <img src={imagePath} alt="Slide" className="carousel-image-img" />
    </div>
  );
};

export default ExampleCarouselImage;
