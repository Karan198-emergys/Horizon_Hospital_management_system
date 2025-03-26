import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import formSliceReducer from "../Slices/FormSlice/FormSlice"

const store = configureStore({
  reducer: {
    authentication: authReducer,
    patientForm : formSliceReducer,
  },
});

export default store;
