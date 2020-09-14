import React from "react";
import { useParams } from "react-router-dom";

const Brewery = (props) => {
  console.log(props);
  const id = useParams();
  const brewery = props.location.state;
  console.log(props.location.state);
  return (
    <>
      <p>brewery page</p>
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
            <strong>Phone Number:</strong>
            {brewery.phone}
          </p>
          <p>Brewery ID: {brewery.id}</p>
        </div>
      </div>
    </>
  );
};

export default Brewery;
