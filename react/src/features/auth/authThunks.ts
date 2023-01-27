import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../app/firebase";
import { addNotification } from "../../app/notificationThunks";

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
  }, thunkapi) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, args.email, args.password);
    } catch (error: unknown) {
      thunkapi.dispatch(addNotification({
        type: 'error',
        message: (error as any).message,
        id: new Date().toString(),
      }));
    }
  },
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