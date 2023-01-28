import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from '../models/request.model';

export interface DataState {
  requests: Request[];
}

const initialState: DataState = {
  requests: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addRequests: (state, action: PayloadAction<Request[]>) => {
      state.requests = [ ...state.requests, ...action.payload ];
    },
    removeRequest: (state, action: PayloadAction<Request>) => {
      state.requests = state.requests.filter((req) => req.id !== action.payload.id);
    },
    updateRequest: (state, action: PayloadAction<Request>) => {
      state.requests = [ action.payload, ...state.requests.filter((req: Request) => req.id !== action.payload.id) ];
    },
  },
  extraReducers: (builder) => { },
});

export const {
  addRequests,
  removeRequest,
  updateRequest,
} = dataSlice.actions;

export default dataSlice.reducer;
