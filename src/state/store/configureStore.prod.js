import { configureStore } from '@reduxjs/toolkit';

import reducer from 'state/reducers';

export default (initialState => {
  const store = configureStore({
    reducer,
    preloadedState: initialState
  });

  return store;
})();
