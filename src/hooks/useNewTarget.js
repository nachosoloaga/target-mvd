import { useSelector, shallowEqual } from 'react-redux';

const useNewTarget = () => useSelector(state => state.targetReducer, shallowEqual);

export default useNewTarget;
