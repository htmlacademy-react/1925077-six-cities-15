import {createSlice} from '@reduxjs/toolkit';
import {OFFERS} from '../mock/offers';
import {initialState} from '../types/redux-types';

const initialState: initialState = {
  offers: OFFERS,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {},
  selectors: {
    offers: (state) => state.offers
  }
});

const offerActions = offersSlice.actions;

const offerSelectors = offersSlice.selectors;

export {offerActions, offersSlice, offerSelectors};

