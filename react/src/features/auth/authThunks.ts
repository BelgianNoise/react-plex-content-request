import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerAccount = createAsyncThunk('auth/register',
  async (args: {
    email: string,
    password: string,
  }) => {
    console.log('Registering account');
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log('registered -', args);
        resolve()
      }, 3000)
    );
  }
);

export const login = createAsyncThunk('auth/login',
  async (args: {
    email: string,
    password: string,
  }) => {
    console.log('Logging in');
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log('Logged in -', args);
        resolve()
      }, 3000)
    );
  }
);

export const logout = createAsyncThunk('auth/logout',
  async () => {
    console.log('Logging out');
    return new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log('Logged out');
        resolve()
      }, 3000)
    );
  }
);