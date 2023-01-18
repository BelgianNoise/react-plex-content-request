import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { },
  extraReducers: (builder) => { },
});

export const { } = authSlice.actions;

export default authSlice.reducer;
