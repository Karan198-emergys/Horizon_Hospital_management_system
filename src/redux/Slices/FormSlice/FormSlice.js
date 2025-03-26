import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: localStorage.getItem("step") || 1,
  formName: null,
  loading: false,
  patientID: null,
  patientDetails: {},
  isEditing: false,
  isUpdating: false,
  isDeleting: false,
};

const fromSlice = createSlice({
  name: "patientForm",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step++;
      localStorage.setItem("step", state.step);
    },
    backStep: (state) => {
      if (state.step > 1) state.step--;
    },
    setFormName: (state, action) => {
      state.formName = action.payload;
    },
    setPatientData: (state, action) => {
      state.patientID = action.payload?.patientID || null;
      state.patientDetails = action.payload?.patientDetails || {};
    },
  },
});
export const { nextStep, backStep, setFormName, setPatientData } =
  fromSlice.actions;

export default fromSlice.reducer;
