import {createAsyncThunk} from '@reduxjs/toolkit';
import {Review} from '../../types/common-types';
import {AxiosInstance} from 'axios';
import {Endpoint} from '../../consts/common-consts';

export const fetchReviews = createAsyncThunk<Review[], string, {extra: AxiosInstance}>(
  'fetchReviews', async (id, {extra: api}) => {
    const response = await api.get<Review[]>(`${Endpoint.Comments}/${id}`);
    return response.data;
  });
