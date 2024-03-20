import {createAction, createReducer} from '@reduxjs/toolkit';
import {OFFERS} from '../mock/offers';
import {CityName} from '../types/common-types';
import {initialState} from '../types/redux-toolkit-types';
import {START_CITY} from '../pages/page-main/const';

const initialState: initialState = {
  city: START_CITY,
  offers: OFFERS,
};

const enum ActionType {
  ChangeCity = 'OFFERS/ChangeCity',
}

const changeCity = createAction<CityName>(ActionType.ChangeCity);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
    state.offers = OFFERS.filter((offer) => offer.city.name === state.city);// ?
  });
});

export {reducer, changeCity};
