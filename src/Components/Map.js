import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

class Map extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: parseFloat(this.props.latitude),
      longitude: parseFloat(this.props.longitude),
      zoom: 12
    }
  };
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken=""
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
