import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from '../models/notification.model';

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
    addMessage: (state, action: PayloadAction<Notification>) => {
      state.notifications = [ ...state.notifications, action.payload ];
    },
    removeMessage: (state, action: PayloadAction<Notification>) => {
      state.notifications = state.notifications.filter((m: Notification) => m.id !== action.payload.id);
    },
    clearMessages: (state) => {
      state.notifications = [];
    },
  },
  extraReducers: (builder) => { },
});

export const {
  addMessage,
  removeMessage,
  clearMessages,
} = appRootSlice.actions;

export default appRootSlice.reducer;
