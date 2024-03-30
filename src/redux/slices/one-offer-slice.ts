import {createSlice} from '@reduxjs/toolkit';
import {FullOffer, OfferCard} from '../../types/common-types';
import {RequestStatus} from '../../types/redux-types';
import {fetchNearestOffers, fetchOneOffer} from '../thunks/offers-thunk';

interface initialState {
  info: FullOffer | null;
  nearest: OfferCard[];
  status: RequestStatus;
}

const initialState: initialState = {
  info: null,
  nearest: [],
  status: RequestStatus.Idle,
};

export const offersSlice = createSlice({
  initialState,
  name: 'oneOffer',
  reducers: {},
  selectors: {
    nearestOffers: (state) => state.nearest,
    offer: (state) => state.info,
    offerStatus: (state) => state.status
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOneOffer.fulfilled, (state, action) => {
      state.info = action.payload;
      state.status = RequestStatus.Success;
    });
    builder.addCase(fetchOneOffer.rejected, (state) => {
      state.status = RequestStatus.Failed;
    });
    builder.addCase(fetchOneOffer.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(fetchNearestOffers.fulfilled, (state, action) => {
      state.nearest = action.payload;
    });
  }
});

export const offerActions = {...offersSlice.actions, fetchNearestOffers, fetchOneOffer};

export const offerSelector = offersSlice.selectors;
