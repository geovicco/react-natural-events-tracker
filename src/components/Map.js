import { useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import LocationMarker from './LocationMarker';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWRpdmljY28iLCJhIjoiY2toN2d0cnJkMGFkMTJ5bzhxbTB5eDJmeCJ9.KfuAOmzRFSOf9dI1R4Mz2w'; // Set your mapbox token here

const Map = ({ data }) => {
    
    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: -122.4,
        zoom: 4,
        bearing: 0,
        pitch: 0
    })

    const wildfireMarkers = data.map(e => {
        if(e.categories[0].id === 8) {
            return <Marker key = {e.id}
                           latitude={e.geometries[0].coordinates[1]} 
                           longitude = {e.geometries[0].coordinates[0]}
                   >
                       <LocationMarker/>
                   </Marker>
        }
        return null
    })

    return (
        <div className="map">
            <MapGL
            {...viewport}
            width= "100vw"
            height= "100vh"
            mapStyle= "mapbox://styles/adivicco/ck92z7q8b2ndc1ioc8nc1vxf3"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken= {MAPBOX_TOKEN}
            >
                {wildfireMarkers}
            </MapGL>
        </div>
    )
}

export default Map;
