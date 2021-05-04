import { useSelector, shallowEqual } from 'react-redux';
import { setNewTargetCoords } from '../state/actions/targetActions';
import useDispatch from './useDispatch';

const useNewTarget = () => {
  const newTarget = useSelector(state => state.targetReducer, shallowEqual);
  const updateTargetCoords = useDispatch(setNewTargetCoords);
  const hasNewTarget = Boolean(newTarget.coords.length);

  return { newTarget, updateTargetCoords, hasNewTarget };
};

export default useNewTarget;
