import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import IconLocation from './../assets/images/icon-location.svg';
import { useEffect, useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;

const iconSize = [46, 56];

L.Icon.Default.mergeOptions({
  iconUrl: IconLocation,
  iconRetinaUrl: IconLocation,
  iconSize: iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1] + 10], 
});

function UserLocation({data}) 
{    
    const [position, setPosition] = useState(null);
    const mainMap = useMap();

    useEffect(() => {
      
      setPosition({ lat: data['lat'], lng: data['lon'] });
      mainMap.flyTo({ lat: data['lat'], lng: data['lon'] }, mainMap.getZoom());

    }, [data])

    const map = useMapEvents({
        click() {
            setPosition({ lat: data['lat'], lng: data['lon'] });
            map.flyTo({ lat: data['lat'], lng: data['lon'] }, map.getZoom());
        },
    });

    return position && (
      <Marker position={position}>
        <Popup>
          {data['city']}, {data['country']}
        </Popup>
      </Marker>
    );
}

const Map = ({data, ipAdress}) => {

  if(!data || data.lat == null || data.lon == null)
    return false;

  return (
    <MapContainer center={[data['lat'], data['lon']]} zoomControl={false} zoom={13} minZoom={3} className='z-10 w-full h-screen'>
      <TileLayer attribution='IP Address Tracker' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <UserLocation data={data} />
    </MapContainer>
  )
}

export default Map;