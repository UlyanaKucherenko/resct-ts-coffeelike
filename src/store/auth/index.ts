import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { thunks } from './thunks';
import { selectors } from './selectors';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  roles: string[];
  username: string | null;
  loginStatus: status;
  logoutStatus: status;
  registrationStatus: status;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  roles: ['P_USER'],
  username: null,
  loginStatus: status.IDLE,
  logoutStatus: status.IDLE,
  registrationStatus: status.IDLE,
};

const slice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(thunks.authLogin.pending, (state) => {
        state.loginStatus = status.PENDING;
      })
      .addCase(thunks.authLogin.fulfilled, (state, { payload }) => {
        if (payload) {
          const { token, email } = payload;
          state.token = token;
          state.username = email;
        }
        state.loginStatus = status.SUCCESS;
      })
      .addCase(thunks.authLogin.rejected, (state) => {
        state.loginStatus = status.FAIL;
      })

      .addCase(thunks.authLoginWithGoogle.pending, (state) => {
        state.loginStatus = status.PENDING;
      })
      .addCase(thunks.authLoginWithGoogle.fulfilled, (state, { payload }) => {
        if (payload) {
          const { token, email } = payload;
          state.token = token;
          state.username = email;
        }
        state.loginStatus = status.SUCCESS;
      })
      .addCase(thunks.authLoginWithGoogle.rejected, (state) => {
        state.loginStatus = status.FAIL;
      })

      .addCase(thunks.authLogout.pending, (state) => {
        state.logoutStatus = status.PENDING;
      })
      .addCase(thunks.authLogout.fulfilled, (state) => {
        state.logoutStatus = status.SUCCESS;
      })
      .addCase(thunks.authLogout.rejected, (state) => {
        state.logoutStatus = status.FAIL;
      });
  },
  initialState,
  name: 'auth',
  reducers: {},
});

const auth = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { auth };
export default slice.reducer;
