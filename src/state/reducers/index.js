import { combineReducers } from 'redux';
import session from './sessionReducer';
import statusReducer from './statusReducer';
import targetReducer from './targetReducer';

const rootReducer = combineReducers({
  session,
  statusReducer,
  targetReducer
});

export default rootReducer;
