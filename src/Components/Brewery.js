import React from "react";
import { useParams } from "react-router-dom";
import mapboxgl from "mapbox-gl";

class Brewery extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    mapboxgl.accessToken = "";
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 2,
    });
  }

  render() {
    const id = useParams();
    const brewery = this.props.location.state;
    console.log(this.props.location.state);
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
            <div>
              <div ref={(el) => (this.mapContainer = el)} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Brewery;
