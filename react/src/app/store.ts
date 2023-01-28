import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootReducer from './rootReducer';
import dataReducer from './dataSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    root: rootReducer,
    auth: authReducer,
    counter: counterReducer,
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
