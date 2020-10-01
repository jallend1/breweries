import React from 'react';
import Map from './Map';
import CardContent from './CardContent';

class Brewery extends React.Component {
  render() {
    const brewery = this.props.location.state;
    return (
      <>
        <div className="card">
          <div className="card-title center">{brewery.name}</div>
          <CardContent brewery={brewery} />
          <Map latitude={brewery.latitude} longitude={brewery.longitude} />
        </div>
      </>
    );
  }
}
export default Brewery;
