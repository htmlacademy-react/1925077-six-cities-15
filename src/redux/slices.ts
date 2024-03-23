import type {PayloadAction} from '@reduxjs/toolkit';
import {createSelector, createSlice} from '@reduxjs/toolkit';
import {OFFERS} from '../mock/offers';
import {initialState} from '../types/redux-types';
import {CityName} from '../types/common-types';
import {CITIES} from '../consts/common-consts';

const initialState: initialState = {
  city: CITIES[0].name,
  offers: OFFERS,
};

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
  },
  selectors: {
    city: (state) => state.city,
    offers: (state) => state.offers
  }
});

const offerActions = offersSlice.actions;

const offerSelectors = {
  ...offersSlice.selectors,
  cityOffers: createSelector(offersSlice.selectors.offers, offersSlice.selectors.city, (offers, city) => offers.filter((offer) => offer.city.name === city))
};

export {offerActions, offersSlice, offerSelectors};

