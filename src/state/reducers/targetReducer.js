import { createSlice } from '@reduxjs/toolkit';
import { setNewTargetCoords, getTargetTopicsFulfilled } from 'state/actions/targetActions';

const initialState = {
  coords: [],
  topics: []
};

const targetSlice = createSlice({
  name: 'target',
  initialState,
  extraReducers: {
    [setNewTargetCoords]: (state, { payload }) => {
      state.coords = payload;
    },
    [getTargetTopicsFulfilled]: (state, { payload }) => {
      state.topics = payload.topics.map(t => t.topic);
    }
  }
});

export default targetSlice.reducer;
