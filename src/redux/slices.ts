import {createSlice} from '@reduxjs/toolkit';
import {OFFERS} from '../mock/offers';
import {initialState} from '../types/redux-types';

const initialState: initialState = {
  offers: OFFERS,
  hoveredCardId: undefined
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
    activeId: (state) => state.hoveredCardId
  }
});

const offerActions = offersSlice.actions;

const offerSelectors = offersSlice.selectors;

export {offerActions, offersSlice, offerSelectors};

