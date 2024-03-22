import {store} from '../redux/index';
import {CityName, OfferCard} from './common-types';

type initialState = {
  city: CityName;
  offers: OfferCard[];
};

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {initialState, RootState, AppDispatch};
