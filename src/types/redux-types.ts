import {store} from '../redux/index';
import {OfferCard} from './common-types';

type initialState = {
  offers: OfferCard[];
  hoveredCardId?: string | undefined;
};

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {initialState, RootState, AppDispatch};
