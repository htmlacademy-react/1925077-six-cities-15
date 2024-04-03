import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../types/redux-types';
import {fetchAllOffers} from '../thunks/offers-thunks';
import {OfferCard} from '../../types/common-types';

interface initialState {
  offers: OfferCard[];
  hoveredCardId?: string | undefined;
  status: RequestStatus;
}

const initialState: initialState = {
  offers: [],
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
    status: (state) => state.status
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

const offersActions = {...offersSlice.actions, fetchAllOffers};

const offersSelectors = offersSlice.selectors;

export {offersActions, offersSlice, offersSelectors};

