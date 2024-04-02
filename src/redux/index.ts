import {configureStore} from '@reduxjs/toolkit';
import {offersSlice} from './slices/offers-slice';
import {createAPI} from '../services/api';
import {oneOfferSlice} from './slices/one-offer-slice';
import {reviewsSlice} from './slices/reviews-slice';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
    [oneOfferSlice.name]: oneOfferSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    //todo: add other slices
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});
