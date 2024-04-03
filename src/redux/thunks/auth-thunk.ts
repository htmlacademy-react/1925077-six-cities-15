import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../../types/common-types';
import {AxiosInstance} from 'axios';
import {Endpoint} from '../../consts/common-consts';
import {dropToken, saveToken} from '../../services/token';


const checkAuth = createAsyncThunk<User, undefined, {extra: AxiosInstance}>('auth/checkAuth', async (_arg, {extra: api}) => {
  const response = await api.get<User>(Endpoint.Login);
  return response.data;
});

type LoginData = {
  email: string;
  password: string;
}

const login = createAsyncThunk<User, LoginData, {extra: AxiosInstance}>('auth/login', async ({email, password}, {extra: api}) => {
  const response = await api.post<User>(Endpoint.Login, {email, password});
  saveToken(response.data.token);
  return response.data;
});

const logout = createAsyncThunk<unknown, undefined, {extra: AxiosInstance}>('auth/logout', async (_arg, {extra: api}) => {
  await api.delete(Endpoint.Logout);
  dropToken();
});

export {checkAuth, login, logout};
