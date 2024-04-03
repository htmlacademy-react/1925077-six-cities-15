import {createSlice} from '@reduxjs/toolkit';
import {FullOffer, OfferCard} from '../../types/common-types';
import {RequestStatus} from '../../types/redux-types';
import {fetchNearByOffers, fetchOneOffer} from '../thunks/offers-thunks';

interface initialState {
  info: FullOffer | null;
  nearBy: OfferCard[];
  status: RequestStatus;
}

const initialState: initialState = {
  info: null,
  nearBy: [],
  status: RequestStatus.Idle,
};

export const oneOfferSlice = createSlice({
  initialState,
  name: 'oneOffer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearBy = [];
      state.status = RequestStatus.Idle;
    }
  },
  selectors: {
    nearbyOffers: (state) => state.nearBy,
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

    builder.addCase(fetchNearByOffers.fulfilled, (state, action) => {
      state.nearBy = action.payload;
    });
  }
});

export const oneOfferActions = {...oneOfferSlice.actions, fetchNearByOffers, fetchOneOffer};

export const oneOfferSelectors = oneOfferSlice.selectors;
