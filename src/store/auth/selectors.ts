import { RootState } from 'store';

const selectors = {
  token: (state: RootState) => state.auth.token,
  roles: (state: RootState) => state.auth.roles,
  username: (state: RootState) => state.auth.username,
  loginStatus: (state: RootState) => state.auth.loginStatus,
  registrationStatus: (state: RootState) => state.auth.registrationStatus,
};

export { selectors };
