import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { token } from '../token';

class Map extends React.Component {
  state = {
    viewport: {
      width: 300,
      height: 400,
      latitude: parseFloat(this.props.latitude),
      longitude: parseFloat(this.props.longitude),
      zoom: 13
    }
  };
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={token}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Marker
          latitude={parseFloat(this.props.latitude)}
          longitude={parseFloat(this.props.longitude)}
        >
          <div>x</div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
