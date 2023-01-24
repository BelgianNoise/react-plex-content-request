import { createSlice } from '@reduxjs/toolkit';
import { AuthWindowStatus } from '../../models/auth-window-status';
import { login, logout, registerAccount } from './authThunks';

export interface AuthState {
  isLoggedIn: boolean;
  showAuthWindow: boolean;
  status: AuthWindowStatus;
  loading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  showAuthWindow: false,
  status: AuthWindowStatus.SING_IN,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showAuthWindow: (state) => {
      state.showAuthWindow = true;
      state.status = AuthWindowStatus.SING_IN;
    },
    hideAuthWindow: (state) => { state.showAuthWindow = false },
    goToSignIn: (state) => { state.status = AuthWindowStatus.SING_IN },
    goToRegister: (state) => { state.status = AuthWindowStatus.REGISTER },
    goToForgotPassowrd: (state) => { state.status = AuthWindowStatus.FORGOT_PASSWORD },
  },
  extraReducers: (builder) => { builder
    .addCase(registerAccount.pending, (state) => { state.loading = true })
    .addCase(registerAccount.fulfilled, (state) => { state.loading = false })
    .addCase(registerAccount.rejected, (state) => { state.loading = false })
    .addCase(login.pending, (state) => { state.loading = true })
    .addCase(login.fulfilled, (state) => { state.loading = false })
    .addCase(login.rejected, (state) => { state.loading = false })
    .addCase(logout.pending, (state) => { state.loading = true })
    .addCase(logout.fulfilled, (state) => { state.loading = false })
    .addCase(logout.rejected, (state) => { state.loading = false });
  },
});

export const {
  showAuthWindow,
  hideAuthWindow,
  goToSignIn,
  goToRegister,
  goToForgotPassowrd,
} = authSlice.actions;

export default authSlice.reducer;
