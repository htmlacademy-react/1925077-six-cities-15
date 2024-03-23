import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {AppDispatch, RootState} from '../types/redux-types';
import {store} from '../redux/index';
import {ActionCreatorsMapObject, bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';

const useAppDispatch = useDispatch<AppDispatch>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppStore: () => typeof store = useStore;

const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  return useMemo (() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export {useAppDispatch, useAppSelector, useAppStore, useActionCreators};
