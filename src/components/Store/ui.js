import { createSlice } from "@reduxjs/toolkit";

const initialState = { notification: null };

const uiStore = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    removeNotification(state) {
      state.notification = null;
    },
  },
});

export const uiAction = uiStore.actions;

export const uiSliceReducer = uiStore.reducer;
