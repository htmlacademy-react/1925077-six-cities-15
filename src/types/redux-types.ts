import {store} from '../redux/index';
import {OfferCard} from './common-types';

export const enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}

interface initialState {
  offers: OfferCard[];
  hoveredCardId?: string | undefined;
  status: RequestStatus;
}

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {initialState, RootState, AppDispatch};
