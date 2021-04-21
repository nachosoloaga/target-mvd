import { createSlice } from '@reduxjs/toolkit';
import { updateNewTargetCoords } from 'state/actions/targetActions';

const initialState = {
  coords: []
};

const sessionSlice = createSlice({
  name: 'target',
  initialState,
  extraReducers: {
    [updateNewTargetCoords]: (state, { payload }) => {
      state.coords = payload;
    }
  }
});

export default sessionSlice.reducer;
