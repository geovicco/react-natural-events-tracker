import { useState, useEffect } from 'react';
import Map from './components/Map';
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
    console.log(eventData);
  }, [eventData])

  return (
    <div>
      <Map/>
    </div>
  );
}

export default App;
