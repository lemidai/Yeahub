import { createSlice } from '@reduxjs/toolkit';
import { FiltersState } from './types';

export const QUESTION_FILTERS_SLICE_KEY = 'filters';

const initialState: FiltersState = {
  specializations: [],
  rate: [],
  limit: 30,
  skills: [],
  complexity: [],
  titleOrDescription: '',
  skillFilterMode: 'ANY',
  page: 1,
};

const questionFiltersSlice = createSlice({
  name: QUESTION_FILTERS_SLICE_KEY,
  initialState,
  reducers: {
    setSpecializations: (state, action) => {
      const value = action.payload;

      if (state.specializations.includes(value)) {
        state.specializations = state.specializations.filter(
          (specialization) => specialization !== value
        );
      } else {
        state.specializations.push(value);
      }
      state.page = 1;
    },
    setSkills: (state, action) => {
      const value = action.payload;

      if (state.skills.includes(value)) {
        state.skills = state.skills.filter((skill) => skill !== value);
      } else {
        state.skills.push(value);
      }
      state.page = 1;
    },
    setRating: (state, action) => {
      const value = action.payload;

      if (state.rate.includes(value)) {
        state.rate = state.rate.filter((rate) => rate !== value);
      } else {
        state.rate.push(value);
      }
      state.page = 1;
    },
    setComplexity: (state, action) => {
      const value = action.payload;

      if (state.complexity.includes(value)) {
        state.complexity = state.complexity.filter((complexity) => complexity !== value);
      } else {
        state.complexity.push(value);
      }
      state.page = 1;
    },
    setTitleOrDescription: (state, action) => {
      state.titleOrDescription = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const questionFiltersReducer = questionFiltersSlice.reducer;
export const {
  setSpecializations,
  setSkills,
  setRating,
  setComplexity,
  setTitleOrDescription,
  setPage,
} = questionFiltersSlice.actions;
