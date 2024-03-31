import {store} from '../redux/index';

export const enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed',
}

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type {RootState, AppDispatch};
