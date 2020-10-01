import React from 'react';
import { formatPhone } from '../utils';

const CardContent = ({ brewery }) => {
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
          src={`../images/states/${brewery.state}.png`}
          alt={`Outline of ${brewery.state}`}
        />
      </div>
    </div>
  );
};

export default CardContent;
