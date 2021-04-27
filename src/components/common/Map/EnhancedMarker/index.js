import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import { shallowEqual, useSelector } from 'react-redux';
import getTopicIcon from '../Icons';

const initialTopicState = {
  id: '',
  label: ''
};

const EnhancedMarker = ({ target }) => {
  const [targetTopic, setTargetTopic] = useState(initialTopicState);
  const topics = useSelector(state => state.targetReducer.topics, shallowEqual);

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
  target: object.isRequired
};

export default EnhancedMarker;
