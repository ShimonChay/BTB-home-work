import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface DialogState {
  isOpen: boolean;
  content: ReactNode;
}

const initialState: DialogState = {
  isOpen: false,
  content: <></>,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialogOpenState: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setDialogContent: (state, action: PayloadAction<ReactNode>) => {
      state.content = action.payload;
    },
  },
});

export const { setDialogOpenState, setDialogContent } = dialogSlice.actions;

export default dialogSlice.reducer;
