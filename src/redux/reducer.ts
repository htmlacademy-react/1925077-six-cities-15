/* import {createAction, createReducer} from '@reduxjs/toolkit';
import {OFFERS} from '../mock/offers';
import {ActionType, CityName} from '../types/common-types';
import {initialState} from '../types/redux-types';
import {CITIES} from '../consts/common-consts';

const initialState: initialState = {
  city: CITIES[0].name,
  offers: OFFERS
};

const changeCity = createAction<CityName>(ActionType.ChangeCity);

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
});

export {reducer, changeCity}; */
