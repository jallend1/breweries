import React from 'react';
import { formatPhone } from '../utils';

const CardContent = ({ brewery }) => {
  //Converts state names that have spaces into hyphens to correspond with the filename structure
  let stateURL = brewery.state;
  if (brewery.state && brewery.state.includes(' ')) {
    stateURL = brewery.state.replace(' ', '-');
  }
  return (
    <div className="card-content brewerycard">
      <div className="details">
        <div className="location">
          <p>
            <strong>Location:</strong> {brewery.city}, {brewery.state}
          </p>
          <p>
            <strong>Street address:</strong> {brewery.street}
          </p>
          <p>
            <strong>ZIP Code:</strong> {brewery.postal_code}
          </p>
        </div>
        <a href={brewery.website_url}>{brewery.website_url}</a>
        <p>
          <strong>Phone Number: </strong>
          {formatPhone(brewery.phone)}
        </p>
      </div>
      <div className="statelogo">
        <img
          src={`../images/states/${stateURL}.png`}
          alt={`Outline of ${brewery.state}`}
        />
      </div>
    </div>
  );
};

export default CardContent;
