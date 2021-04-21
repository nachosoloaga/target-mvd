import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import NewTarget from './NewTarget';

const UpdateCenter = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([position.x, position.y]);
  }, [map, position]);

  return null;
};

const Map = ({ position }) => {
  return (
    <MapContainer
      style={{ height: '100vh', width: '65%' }}
      center={[position.x, position.y]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UpdateCenter position={position} />
      <NewTarget />
    </MapContainer>
  );
};

Map.propTypes = {
  position: object.isRequired
};

export default Map;
