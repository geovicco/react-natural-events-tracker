import {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWRpdmljY28iLCJhIjoiY2toN2d0cnJkMGFkMTJ5bzhxbTB5eDJmeCJ9.KfuAOmzRFSOf9dI1R4Mz2w'; // Set your mapbox token here

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 1,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        mapStyle = "mapbox://styles/adivicco/ck92z7q8b2ndc1ioc8nc1vxf3"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}

export default Map;

// document.body.style.margin = 0;
// render(<Root />, document.body.appendChild(document.createElement('div')));