import React, { useState, useEffect } from 'react';
import { arrayOf, object } from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import getTopicIcon from '../Icons';

const initialTopicState = {
  id: '',
  label: ''
};

const EnhancedMarker = ({ target, topics }) => {
  const [targetTopic, setTargetTopic] = useState(initialTopicState);

  useEffect(() => {
    if (topics.length != 0) {
      const temp = topics.find(t => t.id == target.topicId);
      setTargetTopic(temp);
    }
  }, [topics, target, setTargetTopic]);

  return (
    <Marker position={[target.lat, target.lng]} icon={getTopicIcon(target.topicId)}>
      <Popup>{`${target.title}, ${targetTopic.label}`}</Popup>
    </Marker>
  );
};

EnhancedMarker.propTypes = {
  target: object.isRequired,
  topics: arrayOf(object).isRequired
};

export default EnhancedMarker;
