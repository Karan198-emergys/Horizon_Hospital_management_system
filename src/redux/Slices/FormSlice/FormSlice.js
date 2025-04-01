import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  patientFamilyInfo,
  patientPersonalInfo,
  updatePatientPersonalInfo,
  diseaseInfo,
  updateDiseaseInfo,
  UpdateFamilyInfo,
  uploadDocument,
} from "../async/AsyncFunction";

const initialState = {
  step: localStorage.getItem("step") || 1,
  formName: null,
  loading: false,
  personalInfoDetails: {},
  familyInfoDetails: {},
  diseaseInfoDetails: {},
  isEditing: false,
  isUpdating: false,
  isDeleting: false,
  patient_id: null,
};

const fromSlice = createSlice({
  name: "patientForm",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step >= 4) {
        state.step = 1;
        return;
      }
      state.step++;
      localStorage.setItem("step", state.step);
    },
    backStep: (state) => {
      if (state.step > 1) state.step--;
      localStorage.setItem("step", state.step);
    },
    stepReset: (state) => {
      state.step = 1;
      localStorage.setItem("step", state.step);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(patientPersonalInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(patientPersonalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.patient_id = action.payload.data.patient_id;
        state.personalInfoDetails = action.payload;
        toast.success("Patient Information added successfully");
      })
      .addCase(patientPersonalInfo.rejected, (state) => {
        state.loading = false;
        toast.error("Failed to add patient information");
      });

    builder
      .addCase(updatePatientPersonalInfo.pending, (state) => {
        state.isUpdating = true;
      })
      .addCase(updatePatientPersonalInfo.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.personalInfoDetails = action.payload.data;
        toast.success("Patient Information updated successfully");
      })
      .addCase(updatePatientPersonalInfo.rejected, (state, action) => {
        state.isUpdating = false;
        toast.error(
          action.payload?.message,
          "Failed to update patient information"
        );
      });

    builder
      .addCase(patientFamilyInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(patientFamilyInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.familyInfoDetails = action.payload.data;
        toast.success("Family Information added successfully");
      })
      .addCase(patientFamilyInfo.rejected, (state) => {
        state.loading = false;
        toast.error("Failed to add family information");
      });

    builder
      .addCase(UpdateFamilyInfo.pending, (state) => {
        state.isUpdating = true;
      })
      .addCase(UpdateFamilyInfo.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.familyInfoDetails = action.payload.data;
        toast.success("Family Information updated successfully");
        return action.payload.data;
      })
      .addCase(UpdateFamilyInfo.rejected, (state) => {
        state.isUpdating = false;
        toast.error("Failed to update family information");
      });

    builder
      .addCase(diseaseInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(diseaseInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.diseaseHistory = action.payload.data;
        toast.success("Disease History added successfully");
        return action.payload.data;
      })
      .addCase(diseaseInfo.rejected, (state) => {
        state.loading = false;
        toast.error("Failed to add disease history");
      });

    builder
      .addCase(updateDiseaseInfo.pending, (state) => {
        state.isUpdating = true;
      })
      .addCase(updateDiseaseInfo.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.diseaseHistory = action.payload.data;
        toast.success("Disease History updated successfully");
        return action.payload.data;
      })
      .addCase(updateDiseaseInfo.rejected, (state) => {
        state.isUpdating = false;
        toast.error("Failed to update disease history");
      });

    builder
      .addCase(uploadDocument.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(action.payload.message);
        return action.payload;
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload.message);
      });
  },
});

export const {
  stepReset,
  nextStep,
  documentUpload,
  backStep,
  setFormName,
  setPatientData,
} = fromSlice.actions;

export default fromSlice.reducer;
