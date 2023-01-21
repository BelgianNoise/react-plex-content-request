import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerAccount } from '../features/auth/authThunks';
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
  extraReducers: (builder) => { builder
    .addCase(registerAccount.pending, (state) => { state.loading = true })
    .addCase(registerAccount.fulfilled, (state) => { state.loading = false })
    .addCase(registerAccount.rejected, (state) => { state.loading = false });
  },
});

export const {
  addMessage,
  removeMessage,
  clearMessages,
} = appRootSlice.actions;

export default appRootSlice.reducer;
