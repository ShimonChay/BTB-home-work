// src/features/dialog/hooks.ts
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setDialogOpenState, setDialogContent } from '../../store/slice/DialogSlice';
import { ReactNode } from 'react';

export const useDialog = () => {
  const isOpen = useSelector((state: RootState) => state.dialog.isOpen);
  const content = useSelector((state: RootState) => state.dialog.content);
  const dispatch = useDispatch<AppDispatch>();

  const setIsOpen = (isOpen: boolean) => {
    dispatch(setDialogOpenState(isOpen));
  };

  const setContent = (content: ReactNode) => {
    dispatch(setDialogContent(content));
  };

  return { isOpen, setIsOpen, content, setContent };
};
