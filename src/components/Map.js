import React, { useState, useRef, useCallback } from 'react';
import MapGL, { Marker,
    GeolocateControl,
    FullscreenControl,
    ScaleControl,
    NavigationControl
} from 'react-map-gl';
import InfoBox from './InfoBox';
import Button from './Button';
import Geocoder from "react-map-gl-geocoder";
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/wi/volcano';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcicles, faBolt, faFire } from '@fortawesome/free-solid-svg-icons';


const WildfireMarker = ({ onClick }) => {
    return (
        <div className='wildfire-marker' onClick={onClick}>
            {/* <Icon icon={wildfireIcon} className='wildfire-icon'/> */}
            <FontAwesomeIcon icon={faFire} className="wildfire-icon"/>
        </div>
    )
}
const StormMarker = ({ onClick }) => {
    return (
        <div className='storm-marker' onClick={onClick}>
            {/* <Icon icon={thunderstormIcon} className='storm-icon'/> */}
            <FontAwesomeIcon icon = {faBolt} className="storm-icon"/>
        </div>
    )
}

const VolcanoMarker = ({ onClick }) => {
    return (
        <div className='volcano-marker' onClick={onClick}>
            <Icon icon={volcanoIcon} className='volcano-icon'/>
        </div>
    )
}

const IcebergMarker = ({ onClick }) => {
    return (
        <div className='iceberg-marker' onClick={onClick}>
            <FontAwesomeIcon icon={faIcicles} className="iceberg-icon"/>
        </div>
    )
}
// Set API Key from your Mapbox Account 
// const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWRpdmljY28iLCJhIjoiY2t1NnE3ODloM3ZjeTJycXR2aWdpdDdrbSJ9.zeUKNOeM5fJwxIXdbrvkTg'; // Set your mapbox token here
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWRpdmljY28iLCJhIjoiY2ttbGtxOHBnMDc0dDJ2bXo1d2ZpcW56aiJ9.-o8ejYbk600ghhhZdW5qoQ' // Standard Style


const Map = ({ data }) => {

    const [locationInfo, setLocationInfo] = useState(null)
    
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 1,
        bearing: 0,
        pitch: 0
    })

    const mapRef = useRef();
    const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
    );
    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
    });
    },
    [handleViewportChange]
    );
    
    // Pass data from EONET API to variables
    const wildfireMarkers = data.map(e => {
        if(e.categories[0].id === 8) {
                return (
                <Marker key = {e.id} latitude={e.geometries[0].coordinates[1]} longitude = {e.geometries[0].coordinates[0]}>
                    <WildfireMarker onClick = {() => {setLocationInfo({ id:e.id, title: e.title, date:new Date(e.geometries[0].date), url:e.sources[0].url })}}/>
                </Marker>
                )}
                return null
            })
    
    const stormMarkers = data.map(e => {
        if(e.categories[0].id === 10) {
            // if(e.categories[0].type === "Point") {
                return (
                <Marker key = {e.id} latitude={e.geometries[0].coordinates[1]} longitude = {e.geometries[0].coordinates[0]}>
                    <StormMarker onClick = {() => {setLocationInfo({ id:e.id, title: e.title, date:new Date(e.geometries[0].date), url:e.sources[0].url })}}/>
                </Marker>
                )}
                return null
            })

    const volcanoMarkers = data.map(e => {
        if(e.categories[0].id === 12) {
            if (e.geometries[0].type === "Point") {
                return (
                <Marker key = {e.id} latitude={e.geometries[0].coordinates[1]} longitude = {e.geometries[0].coordinates[0]}>
                    <VolcanoMarker onClick = {() => {setLocationInfo({ id:e.id, title: e.title, date:new Date(e.geometries[0].date), url:e.sources[0].url })}}/>
                </Marker>
                )}
                return null
            }
            return null
        }) 
    
    const icebergMarkers = data.map(e => {
        if(e.categories[0].id === 15) {
            // if (e.geometries[0].type === "Point") {
                return (
                <Marker key = {e.id} latitude={e.geometries[0].coordinates[1]} longitude = {e.geometries[0].coordinates[0]}>
                    <IcebergMarker onClick = {() => {setLocationInfo({ id:e.id, title: e.title, date:new Date(e.geometries[0].date), url:e.sources[0].url })}}/>
                </Marker>
                )}
                return null
            })
            // return null
        // })


    return (
        <div className="map">
            <MapGL
            ref={mapRef}
            {...viewport}
            width= "100vw"
            height= "96.15vh"
            mapStyle= "mapbox://styles/adivicco/ckhrh61yw20b719ke3jy81f5d"
                    //"mapbox://styles/adivicco/ckn3luvp346tt17pqeq97o4g1"
                    //"mapbox://styles/adivicco/ckhrh5efl1u4819qt2053jnyv"
                    //"mapbox://styles/adivicco/ckhr7iaop1ckj19mp4sl2bbj3"  
                    //"mapbox://styles/adivicco/ck92z7q8b2ndc1ioc8nc1vxf3"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken= {MAPBOX_TOKEN}
            mapOptions = {{
                customAttribution: '<a href="https://github.com/geovicco/react-natural-events-tracker">© Github</a>'
            }} 
            >
                
                <Geocoder className="geocoder-control"
                mapRef={mapRef}
                onViewportChange={handleGeocoderViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                position="top-right"
            />
                {/* Add Navigation Control Plugin */}
                <NavigationControl className="nav-control" />

                {/* Add a Geolocation Control Plugin */}
                <GeolocateControl className="geolocate-control" 
                                positionOptions={{enableHighAccuracy: true}} 
                                trackUserLocation={true}
                                label="Find My Location"
                                />
                {/* Add a Fullscreen Control Plugin */}
                <FullscreenControl className="fullscreen-control" container={document.querySelector('body')}/>

                {/* Add a Scale Control Plugin */}
                <div className="scale-control" >
                    <ScaleControl maxWidth={200} unit={"metric"}/>
                </div>
                {/* Add Data Markers to the Map using Button Component */}
                <Button render = {({on, toggle}) => (
                    <div>
                        {!on && <React.Fragment>{wildfireMarkers}</React.Fragment>}
                        <button className="wildfires-button" onClick={toggle}>Wildfires</button>
                    </div>
                )}/>

                <Button render = {({on, toggle}) => (
                    <div>
                        {!on && <React.Fragment>{stormMarkers}</React.Fragment>}
                        <button className="storms-button" onClick={toggle}>Storms</button>
                    </div>
                )}/>

                <Button render = {({on, toggle}) => (
                    <div>
                        {!on && <React.Fragment>{volcanoMarkers}</React.Fragment>}
                        <button className="volcanoes-button" onClick={toggle}>Volcanoes</button>
                    </div>
                )}/>

                <Button render = {({on, toggle}) => (
                    <div>
                        {!on && <React.Fragment>{icebergMarkers}</React.Fragment>}
                        <button className="icebergs-button" onClick={toggle}>Icebergs</button>
                    </div>
                )}/>
            </MapGL>

            {/* Location Information Box */}
            {locationInfo && <InfoBox info={locationInfo}/>}

        </div>
    )
}

export default Map;
