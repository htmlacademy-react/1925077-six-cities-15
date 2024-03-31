import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {AppDispatch, RootState} from '../types/redux-types';
import {store} from '../redux/index';
import {ActionCreatorsMapObject, AsyncThunk, bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (...args: Parameters<Thunk>) => ReturnType<ReturnType<Thunk>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [Key in keyof Actions]: Actions[Key] extends AsyncThunk<any, any, any> ? BoundAsyncThunk<Actions[Key]> : Actions[Key];
};

const useAppDispatch = useDispatch<AppDispatch>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppStore: () => typeof store = useStore;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo (() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export {useAppDispatch, useAppSelector, useAppStore, useActionCreators};
