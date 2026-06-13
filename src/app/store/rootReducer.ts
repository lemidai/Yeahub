import { sessionReducer } from '@/entities/session/model/sessionSlice';
import { baseApi } from '@/shared/api/baseApi';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  session: sessionReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
