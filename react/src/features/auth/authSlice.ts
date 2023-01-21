import { createSlice } from '@reduxjs/toolkit';
import { AuthWindowStatus } from '../../models/auth-window-status';

export interface AuthState {
  isLoggedIn: boolean;
  showAuthWindow: boolean;
  status: AuthWindowStatus;
}

const initialState: AuthState = {
  isLoggedIn: false,
  showAuthWindow: false,
  status: AuthWindowStatus.SING_IN,
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
  extraReducers: (builder) => { },
});

export const {
  showAuthWindow,
  hideAuthWindow,
  goToSignIn,
  goToRegister,
  goToForgotPassowrd,
} = authSlice.actions;

export default authSlice.reducer;
