import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';
import 'mapbox-gl/dist/mapbox-gl.css';


// Fetch Data from NASA's EONET API

function App() {
  
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
    // console.log(eventData);
  }, [])

  return (
    <div>
      {/* Display Header */}
      <Header />
      {/* If map is done loading display a the map else display a message*/}
      {/* { !loading ? <Map eventData={eventData} /> : <h1>Loading.....</h1>} */}
      { !loading ? <Map data={eventData} /> : <Loader/>}
    </div>
  );
}

export default App;
