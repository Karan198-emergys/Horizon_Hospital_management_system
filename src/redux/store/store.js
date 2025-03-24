import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";

const store = configureStore({
  reducer: {
    authentication: authReducer,
  },
});

export default store;
