import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import { useHistory } from 'react-router';
import routes from 'constants/routesPaths';
import { useNewTarget } from 'hooks';
import { shallowEqual, useSelector } from 'react-redux';
import NewTarget from './NewTarget';
import getTopicIcon from './Icons';
import { getTargets as getTargetsAction } from '../../../state/actions/targetActions';
import useDispatch from '../../../hooks/useDispatch';
import EnhancedMarker from './EnhancedMarker';

const UpdateCenter = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([position.x, position.y]);
  }, [map, position]);

  return null;
};

const Map = ({ position }) => {
  const history = useHistory();
  const { hasNewTarget, newTarget } = useNewTarget();
  const targets = useSelector(state => state.targetReducer.targets, shallowEqual);
  const getTargets = useDispatch(getTargetsAction);

  useEffect(() => {
    if (targets.length === 0) {
      getTargets();
    }
  }, [getTargets, targets.length]);

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
      {hasNewTarget && history.location.pathname == routes.targets.create && (
        <Marker position={newTarget.coords} icon={getTopicIcon()} />
      )}

      {targets.length != 0 &&
        targets.map(target => <EnhancedMarker key={target.id} target={target} />)}
    </MapContainer>
  );
};

Map.propTypes = {
  position: object.isRequired
};

export default Map;
