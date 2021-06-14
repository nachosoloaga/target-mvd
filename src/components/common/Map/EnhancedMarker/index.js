import React from 'react';
import { object } from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import PopupCard from './PopupCard';
import getTopicIcon from '../Icons';

const EnhancedMarker = ({ target }) => {
  return (
    <Marker position={[target.lat, target.lng]} icon={getTopicIcon(target.topicId)}>
      <Popup>
        <PopupCard target={target} />
      </Popup>
    </Marker>
  );
};

EnhancedMarker.propTypes = {
  target: object.isRequired
};

export default EnhancedMarker;
