import React from 'react';
import { object } from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import { useTargetTopic } from 'state/selectorHooks';
import getTopicIcon from '../Icons';

const EnhancedMarker = ({ target }) => {
  const targetTopic = useTargetTopic(target.topicId);

  return (
    <Marker position={[target.lat, target.lng]} icon={getTopicIcon(target.topicId)}>
      <Popup>{`${target.title}, ${targetTopic?.label}`}</Popup>
    </Marker>
  );
};

EnhancedMarker.propTypes = {
  target: object.isRequired
};

export default EnhancedMarker;
