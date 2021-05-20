import { useSelector, shallowEqual } from 'react-redux';

export const useTargetTopic = topicId => {
  const topics = useSelector(state => state.targetReducer.topics, shallowEqual);

  return topics.find(t => t.id === topicId);
};
