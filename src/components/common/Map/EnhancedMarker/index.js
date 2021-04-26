import { object } from 'prop-types';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from '../Icons';

const EnhancedMarker = ({ target }) => {
  return (
    <Marker position={[target.lat, target.lng]} icon={icon}>
      <Popup>{`${target.title}`}</Popup>
    </Marker>
  );
};

EnhancedMarker.propTypes = {
  target: object.isRequired
};

export default EnhancedMarker;
