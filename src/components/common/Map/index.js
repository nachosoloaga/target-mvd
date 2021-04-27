import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import { useHistory } from 'react-router';
import routes from 'constants/routesPaths';
import NewTarget from './NewTarget';
import getTopicIcon from './Icons';

const UpdateCenter = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([position.x, position.y]);
  }, [map, position]);

  return null;
};

const Map = ({ position }) => {
  const [newTargetPos, setNewTargetPos] = useState([]);
  const history = useHistory();

  const setNewMarker = coords => {
    setNewTargetPos(coords);
  };

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
      <NewTarget setNewMarker={setNewMarker} />
      {newTargetPos.length != 0 && history.location.pathname == routes.targets.create && (
        <Marker position={newTargetPos} icon={getTopicIcon()} />
      )}
    </MapContainer>
  );
};

Map.propTypes = {
  position: object.isRequired
};

export default Map;
