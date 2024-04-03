import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/common-types';
import {RequestStatus} from '../../types/redux-types';
import {AuthorizationStatus} from '../../types/routes';
import {checkAuth, login, logout} from '../thunks/auth-thunk';

type UserState = {
  info: User | null;
  requestStatus: RequestStatus;
  authStatus: AuthorizationStatus;
}

const initialState: UserState = {
  info: null,
  requestStatus: RequestStatus.Idle,
  authStatus: AuthorizationStatus.Unknown,
};

function processSuccess(state: UserState, action: PayloadAction<User>) {
  state.info = action.payload;
  state.requestStatus = RequestStatus.Success;
  state.authStatus = AuthorizationStatus.Auth;
}

function processFailed(state: UserState) {
  state.requestStatus = RequestStatus.Failed;
  state.authStatus = AuthorizationStatus.NoAuth;
}

function processLoading(state: UserState) {
  state.requestStatus = RequestStatus.Loading;
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuth.fulfilled, processSuccess);
    builder.addCase(checkAuth.rejected, processFailed);
    builder.addCase(checkAuth.pending, processLoading);
    builder.addCase(login.fulfilled, processSuccess);
    builder.addCase(login.rejected, processFailed);
    builder.addCase(login.pending, processLoading);
    builder.addCase(logout.fulfilled, (state) => {
      state.info = null;
      state.authStatus = AuthorizationStatus.NoAuth;
    });
  },
  selectors: {
    authStatus: (state) => state.authStatus,
    info: (state) => state.info,
  }
});

const userActions = {...userSlice.actions, checkAuth, login, logout};
const userSelectors = userSlice.selectors;

export {userSlice, userActions, userSelectors};
