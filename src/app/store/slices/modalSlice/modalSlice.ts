import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalOpenProps, ModalState } from './types';

const initialState: ModalState = {
  type: null,
  props: undefined,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalOpenProps>) => {
      state.type = action.payload.type;
      state.props = action.payload.props;
    },
    closeModal: (state) => {
      state.type = null;
      state.props = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
