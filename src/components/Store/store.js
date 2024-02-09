import { configureStore } from "@reduxjs/toolkit";
import { loginSliceReducer } from "./login";
import { uiSliceReducer } from "./ui";

const store = configureStore({
  reducer: {
    loginReducer: loginSliceReducer,
    uiReducer: uiSliceReducer,
  },
});

export default store;
