import { sessionReducer } from '@/entities/session/model/sessionSlice';
import { baseApi } from '@/shared/api/baseApi';
import { combineReducers } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modalSlice/modalSlice';
import { questionFiltersReducer } from '@/features/questionsFiltering/model/questionsFiltersSlice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  modal: modalReducer,
  session: sessionReducer,
  filters: questionFiltersReducer,
});
