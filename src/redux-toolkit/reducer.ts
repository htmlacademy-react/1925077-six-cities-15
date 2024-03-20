import {OFFERS} from '../mock/offers';
import {CityName, OfferCardProps} from '../types/common-types';
import {START_CITY} from '../pages/page-main/const';

type initialState = {
  city: CityName;
  offers: OfferCardProps[];
};

const initialState: initialState = {
  city: START_CITY,
  offers: OFFERS,
};

const enum ActionType {
  ChangeCity = 'OFFERS/ChangeCity',
}

const changeCity = (city: CityName) => ({
  payload: city,
  type: ActionType.ChangeCity
});

function reducer (state: initialState = initialState, action: {payload: unknown; type: ActionType}): initialState {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload as CityName};
    default:
      return state;
  }
}

export {reducer, changeCity};
