import {store} from '../redux/index';
import {CityName, OfferCardProps} from './common-types';

type initialState = {
  city: CityName;
  offers: OfferCardProps[];
};

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {initialState, RootState, AppDispatch};
