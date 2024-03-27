import {createAction} from '@reduxjs/toolkit';
import {OfferCard} from '../types/common-types';

export const loadOffers = createAction<OfferCard[]>('offers/loadOffers');
