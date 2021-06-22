import { createLogger } from 'redux-logger';
import startsWith from 'lodash/startsWith';
import { configureStore } from '@reduxjs/toolkit';

import reducer from 'state/reducers';

export default (initialState => {
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, { type }) => !startsWith(type, '@@router')
  });

  const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: true
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
})();
