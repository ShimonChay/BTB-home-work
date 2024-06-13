import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './slice/AdminSlice';
import dialogReducer from './slice/DialogSlice';
import authReducer from './slice/AuthSlice'

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    dialog: dialogReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
