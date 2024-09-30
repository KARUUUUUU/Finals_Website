// LocationCard.jsx
import React from 'react';
import '../css_files/LocationCard.css'; // Ensure this path is correct

const LocationCard = ({ location }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div 
          className="flip-card-front" 
          style={{ backgroundImage: `url(${location.backgroundImage})` }}
        >
          <h4>{location.name}</h4>
          <p>{location.address}</p>
        </div>
        <div className="flip-card-back">
          <p>{location.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
