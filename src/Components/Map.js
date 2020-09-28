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
        mapboxApiAccessToken="pk.eyJ1IjoiamFsbGVuZDEiLCJhIjoiY2tmM2Nld3hvMDFxbzMwbW4yNGk2c3NybiJ9.n6nnx-xBKBI_1jxp3fxZaA"
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
