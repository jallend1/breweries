import React from "react";
import { Link } from "react-router-dom";

class Brewery extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-title center">
            <Link to={`/breweries/${this.props.brewery.id}`}>
              {this.props.brewery.name}
            </Link>
          </div>
          <div className="card-content center">
            <div className="location">
              <p>
                <strong>Location:</strong> {this.props.brewery.city},{" "}
                {this.props.brewery.state}
              </p>
              <p>
                <strong>Street address:</strong> {this.props.brewery.street}
              </p>
              <p>
                <strong>ZIP Code:</strong> {this.props.brewery.postal_code}
              </p>
            </div>
            <a href={this.props.brewery.website_url}>
              {this.props.brewery.website_url}
            </a>
            <p>
              <strong>Phone Number:</strong>
              {this.props.brewery.phone}
            </p>
            <p>Brewery ID: {this.props.brewery.id}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Brewery;
