import type {TypedUseSelectorHook} from 'react-redux';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {AppDispatch, RootState} from '../types/redux-types';
import {store} from '../redux/index';

const useAppDispatch = useDispatch<AppDispatch>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppStore: () => typeof store = useStore;

export {useAppDispatch, useAppSelector, useAppStore};
