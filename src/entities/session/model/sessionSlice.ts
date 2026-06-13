import { createSlice } from '@reduxjs/toolkit';
import { clearTokenInLS, getTokenFromLS, setTokenToLS } from '../lib/helpers';

export const SESSION_SLICE_KEY = 'session' as const;

type SessionState = {
  accessToken: string | null;
  isBootstrapped: boolean;
};

const initialState: SessionState = {
  accessToken: getTokenFromLS(),
  isBootstrapped: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.isBootstrapped = true;
      setTokenToLS(action.payload.access_token);
    },
    removeToken: (state) => {
      state.accessToken = null;
      state.isBootstrapped = true;
      clearTokenInLS();
    },
    setBootstrapped: (state) => {
      state.isBootstrapped = true;
    },
  },
});

export const sessionReducer = sessionSlice.reducer;
export const { setToken, removeToken, setBootstrapped } = sessionSlice.actions;
