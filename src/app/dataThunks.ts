import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from '../models/request.model';
import { addRequestToFirestore, deleteRequestFromFirestore, updateRequestInFirestore } from "./firestore";
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

export const submitRequest = createAsyncThunk('data/addRequest',
  async (args: {
    request: Request,
  }, thunkapi) => {
    try {
      await addRequestToFirestore(args.request);
      thunkapi.dispatch(addNotification({
        type: 'success',
        message: 'notification.submitted-request',
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

export const updateRequest = createAsyncThunk('data/updateRequest',
  async (args: {
    request: Request,
  }, thunkapi) => {
    try {
      await updateRequestInFirestore(args.request);
      thunkapi.dispatch(addNotification({
        type: 'success',
        message: 'notification.updated-request',
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
