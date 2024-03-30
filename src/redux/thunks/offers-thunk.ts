import {createAsyncThunk} from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import {FullOffer, OfferCard} from '../../types/common-types';
import {Endpoint} from '../../consts/common-consts';


const fetchAllOffers = createAsyncThunk<OfferCard[], undefined, {extra: AxiosInstance}>('fetchOffers/all', async (_arg, {extra: api}) => {
  const response = await api.get<OfferCard[]>(Endpoint.Offers);
  return response.data;
});

export {fetchAllOffers};
