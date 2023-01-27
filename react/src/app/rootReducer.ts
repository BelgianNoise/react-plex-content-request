import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from '../models/notification.model';
import { addNotification } from './notificationThunks';

export interface AppRootState {
  loading: boolean;
  notifications: Notification[];
}

const initialState: AppRootState = {
  loading: false,
  notifications: [],
};

export const appRootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    removeNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications = state.notifications.filter((m: Notification) => m.id !== action.payload.id);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNotification.fulfilled, (state, action) => {
        state.notifications = [ ...state.notifications, action.payload ];
      })
  },
});

export const {
  removeNotification,
  clearNotifications,
} = appRootSlice.actions;

export default appRootSlice.reducer;
