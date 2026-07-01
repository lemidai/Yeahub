import { createSlice } from '@reduxjs/toolkit';
import { QUESTIONS_SLICE_KEY } from './constants';
import { Question } from './types';

type QuestionsState = Question[] | [];

const initialState: QuestionsState = [];

const questionsSlice = createSlice({
  name: QUESTIONS_SLICE_KEY,
  initialState,
  reducers: {
    setQuestions: (state, action: { payload: Question[] }) => {
      return action.payload;
    },
  },
});

export const questionsReducer = questionsSlice.reducer;
export const { setQuestions } = questionsSlice.actions;
