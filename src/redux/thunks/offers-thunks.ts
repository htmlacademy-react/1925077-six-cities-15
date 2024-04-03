import {createAsyncThunk} from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import {FullOffer, OfferCard} from '../../types/common-types';
import {Endpoint} from '../../consts/common-consts';


const fetchAllOffers = createAsyncThunk<OfferCard[], undefined, {extra: AxiosInstance}>('fetchOffers/all', async (_arg, {extra: api}) => {
  const response = await api.get<OfferCard[]>(Endpoint.Offers);
  return response.data;
});

const fetchOneOffer = createAsyncThunk<FullOffer, string, {extra: AxiosInstance}>('fetchOffers/one', async (id, {extra: api}) => {
  const response = await api.get<FullOffer>(`${Endpoint.Offers}/${id}`);
  return response.data;
});

const fetchNearByOffers = createAsyncThunk<OfferCard[], string, {extra: AxiosInstance}>('fetchOffers/nearby', async (id, {extra: api}) => {
  const response = await api.get<OfferCard[]>(`${Endpoint.Offers}/${id}/nearby`);
  return response.data;
});

export {fetchAllOffers, fetchOneOffer, fetchNearByOffers};
