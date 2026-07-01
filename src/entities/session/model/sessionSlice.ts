import { createSlice } from '@reduxjs/toolkit';
import {
  clearTokenInLS,
  clearUserDataInLS,
  getTokenFromLS,
  getUserDataFromLS,
  setTokenToLS,
  setUserDataToLS,
} from '../lib/helpers';
import { SESSION_SLICE_KEY } from './constants';
import { User } from './types';

type SessionState = {
  accessToken: string | null;
  userData: User | null;
  isBootstrapped: boolean;
};

const initialState: SessionState = {
  accessToken: getTokenFromLS(),
  userData: getUserDataFromLS(),
  isBootstrapped: false,
};

const sessionSlice = createSlice({
  name: SESSION_SLICE_KEY,
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.userData = action.payload.user;
      state.isBootstrapped = true;
      setTokenToLS(action.payload.access_token);
      setUserDataToLS(action.payload.user);
    },
    removeSession: (state) => {
      state.accessToken = null;
      state.userData = null;
      state.isBootstrapped = true;
      clearTokenInLS();
      clearUserDataInLS();
    },
    setBootstrapped: (state) => {
      state.isBootstrapped = true;
    },
  },
});

export const sessionReducer = sessionSlice.reducer;
export const { setSession, removeSession, setBootstrapped } = sessionSlice.actions;
