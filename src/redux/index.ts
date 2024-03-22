import {configureStore} from '@reduxjs/toolkit';
import {offersSlice} from './slices';

export const store = configureStore({
  reducer: offersSlice.reducer
});
