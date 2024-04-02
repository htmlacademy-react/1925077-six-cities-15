import {createSlice} from '@reduxjs/toolkit';
import {FullOffer, OfferCard} from '../../types/common-types';
import {RequestStatus} from '../../types/redux-types';
import {fetchNearestOffers, fetchOneOffer} from '../thunks/offers-thunks';

interface initialState {
  info: FullOffer | null;
  nearests: OfferCard[];
  status: RequestStatus;
}

const initialState: initialState = {
  info: null,
  nearests: [],
  status: RequestStatus.Idle,
};

export const oneOfferSlice = createSlice({
  initialState,
  name: 'oneOffer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearests = [];
      state.status = RequestStatus.Idle;
    }
  },
  selectors: {
    nearestOffers: (state) => state.nearests,
    offer: (state) => state.info,
    status: (state) => state.status,
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
      state.nearests = action.payload;
    });
  }
});

export const oneOfferActions = {...oneOfferSlice.actions, fetchNearestOffers, fetchOneOffer};

export const oneOfferSelectors = oneOfferSlice.selectors;
