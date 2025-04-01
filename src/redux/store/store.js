import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlice";
import formSliceReducer from "../Slices/FormSlice/FormSlice";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["authentications", "patientForm"],
};
const rootReducer = combineReducers({
  authentication: authReducer,
  patientForm: formSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persister = persistStore(store);
export default store;
