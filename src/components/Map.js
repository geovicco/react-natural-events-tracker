import {Component} from 'react';
// import {render} from 'react-dom';
import MapGL, { Marker } from 'react-map-gl';
import LocationMarker from './LocationMarker';

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
        <div className="map">
            <MapGL
            {...this.state.viewport}
            width="100vw"
            height="100vh" 
            // mapStyle="mapbox://styles/mapbox/dark-v9"
            // mapStyle = "mapbox://styles/adivicco/ck92z7q8b2ndc1ioc8nc1vxf3"
            mapStyle = 'mapbox://styles/adivicco/ckhr7iaop1ckj19mp4sl2bbj3'
            onViewportChange={viewport => this.setState({viewport})}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <Marker latitude={23} longitude={78}>
                    <LocationMarker/>
                </Marker>
                
            </MapGL>
        </div>
        );
    }
}

export default Map;

document.body.style.position = 'relative';
// render(<Root />, document.body.appendChild(document.createElement('div')));