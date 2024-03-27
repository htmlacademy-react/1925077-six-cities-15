import {createSlice} from '@reduxjs/toolkit';
// import {mockOffers} from '../../mock/offers';
import {RequestStatus, initialState} from '../../types/redux-types';
import {fetchAllOffers} from '../thunks/offers-thunk';

const initialState: initialState = {
  offers: [],
  // offers: mockOffers,
  hoveredCardId: undefined,
  status: RequestStatus.Idle,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setHoveredCardId: (state, action: {payload: string | undefined}) => {
      state.hoveredCardId = action.payload;
    }
  },
  selectors: {
    offers: (state) => state.offers,
    activeId: (state) => state.hoveredCardId,
    offerStatus: (state) => state.status
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
});

const offerActions = {...offersSlice.actions, fetchAllOffers};

const offerSelectors = offersSlice.selectors;

export {offerActions, offersSlice, offerSelectors};

