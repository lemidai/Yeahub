import { RootState } from '@/app/store';
import { QUESTION_FILTERS_SLICE_KEY } from './questionsFiltersSlice';

export const selectFilters = (state: RootState) => state[QUESTION_FILTERS_SLICE_KEY];
export const selectSpecializations = (state: RootState) =>
  state[QUESTION_FILTERS_SLICE_KEY].specializations;
export const selectSkills = (state: RootState) => state[QUESTION_FILTERS_SLICE_KEY].skills;
export const selectRates = (state: RootState) => state[QUESTION_FILTERS_SLICE_KEY].rate;
export const selectComplexity = (state: RootState) => state[QUESTION_FILTERS_SLICE_KEY].complexity;
