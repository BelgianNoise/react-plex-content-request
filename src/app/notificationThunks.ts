import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notification } from '../models/notification.model';
import { removeNotification } from "./rootReducer";

export const addNotification = createAsyncThunk('notification/add',
  async (notification: Notification, thunkapi) => {
    setTimeout(() => {
      thunkapi.dispatch(removeNotification(notification));
    }, notification.timeout ?? 3000);
    return notification;
  },
);