import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from '../models/request.model';
import { deleteRequestFromFirestore } from "./firestore";
import { addNotification } from "./notificationThunks";

export const deleteRequest = createAsyncThunk('data/deleteRequest',
  async (args: {
    request: Request,
  }, thunkapi) => {
    try {
      await deleteRequestFromFirestore(args.request);
      thunkapi.dispatch(addNotification({
        type: 'success',
        message: 'notification.deleted-request',
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