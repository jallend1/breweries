import React from 'react';
import Map from './Map';

class Brewery extends React.Component {
  render() {
    const formatPhone = (phone) => {
      // Ensures there is actually a phone number of proper length, and then returns a formatted one
      const match = phone.match(/(\d{3})(\d{3})(\d{4})/);
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
    };
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
