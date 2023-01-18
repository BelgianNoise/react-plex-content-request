import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerAccount = createAsyncThunk('auth/register',
  async (args: {
    email: string,
    password: string,
  }) => {
    return new Promise<void>((resolve) =>
      setTimeout(() => resolve(), 3000)
    );
  }
);

export const login = createAsyncThunk('auth/login',
  async () => {
    return new Promise<void>((resolve) =>
      setTimeout(() => resolve(), 3000)
    );
  }
);

export const logout = createAsyncThunk('auth/logout',
  async () => {
    return new Promise<void>((resolve) =>
      setTimeout(() => resolve(), 3000)
    );
  }
);