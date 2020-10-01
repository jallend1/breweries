import React from 'react';
import Map from './Map';
import { formatPhone } from '../utils.js';
class Brewery extends React.Component {
  render() {
    const brewery = this.props.location.state;
    return (
      <>
        <div className="card">
          <div className="card-title center">{brewery.name}</div>
          <div className="card-content center">
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
            <div>
              <Map latitude={brewery.latitude} longitude={brewery.longitude} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Brewery;
