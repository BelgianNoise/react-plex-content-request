import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { firebaseAuth } from "../../app/firebase";
import { addNotification } from "../../app/notificationThunks";
import { goToSignIn, hideAuthWindow } from "./authSlice";

export const registerAccount = createAsyncThunk('auth/register',
  async (args: {
    email: string,
    password: string,
  }, thunkapi) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, args.email, args.password);
      thunkapi.dispatch(addNotification({
        type: 'success',
        message: 'notification.registered-account',
        id: new Date().getTime().toString(),
      }));
    } catch (error: unknown) {
      thunkapi.dispatch(addNotification({
        type: 'error',
        message: (error as any).message,
        id: new Date().getTime().toString(),
      }));
    }
  }
);

export const login = createAsyncThunk('auth/login',
  async (args: {
    email: string,
    password: string,
  }, thunkapi) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, args.email, args.password);
      thunkapi.dispatch(addNotification({
        type: 'success',
        message: 'notification.signed-in',
        id: new Date().getTime().toString(),
      }));
    } catch (error: unknown) {
      thunkapi.dispatch(addNotification({
        type: 'error',
        message: (error as any).message,
        id: new Date().getTime().toString(),
      }));
    }
  },
);

export const resetPassword = createAsyncThunk('auth/resetPassowrd',
  async (args: {
    email: string,
  }, thunkapi) => {
    try {
      await sendPasswordResetEmail(firebaseAuth, args.email);
      thunkapi.dispatch(addNotification({
        type: 'success',
        message: 'notification.password-reset-mail-sent',
        id: new Date().getTime().toString(),
      }));
      thunkapi.dispatch(goToSignIn());
    } catch (error: unknown) {
      thunkapi.dispatch(addNotification({
        type: 'error',
        message: (error as any).message,
        id: new Date().getTime().toString(),
      }));
    }
  },
);

export const logout = createAsyncThunk('auth/logout',
  async (_, thunkapi) => {
    await signOut(firebaseAuth);
    thunkapi.dispatch(addNotification({
      type: 'warning',
      message: 'notification.signed-out',
      id: new Date().getTime().toString(),
    }));
  }
);

export const setIsLoggedIn = createAsyncThunk('auth/setisloggedin',
  async (val: boolean, thunkapi) => {
    if (val) thunkapi.dispatch(hideAuthWindow());
    return val;
  },
);