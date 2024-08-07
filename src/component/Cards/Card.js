import React from 'react';
import './Card.css';

const Card = ({ image, title}) => {
  return (
    <div className='card'>
      <div className='card-image-container'>
        <img src={image} alt={title} className='card-image' />
        <button className='view-demo-btn'>View Demo</button>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
