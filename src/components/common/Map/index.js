import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      style={{ height: '100vh', width: '65%' }}
      center={[51.505, -0.09]}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
