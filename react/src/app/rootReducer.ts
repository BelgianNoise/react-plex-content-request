import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerAccount } from '../features/auth/authThunks';
import { Message } from '../models/message.model';

export interface AppRootState {
  loading: boolean;
  modalMessages: Message[];
}

const initialState: AppRootState = {
  loading: false,
  modalMessages: [],
};

export const appRootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.modalMessages = [ ...state.modalMessages, action.payload ];
    },
    removeMessage: (state, action: PayloadAction<Message>) => {
      state.modalMessages = state.modalMessages.filter((m: Message) => m.id !== action.payload.id);
    },
    clearMessages: (state) => {
      state.modalMessages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAccount.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerAccount.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addMessage, removeMessage, clearMessages } = appRootSlice.actions;

export default appRootSlice.reducer;
