import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { axiosInstance } from "src/Services/utils";

export const loginUser = createAsyncThunk(
  "authentication/loginUser",
  async (Credential, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("user/login", Credential);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "/user/register",
  async (registerCredential, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/user/register",
        registerCredential
      );
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const viewPatient = createAsyncThunk(
  "/user/viewPatient",
  async (userID, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/viewPatient/", userID);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error);
    }
  }
);

export const patientPersonalInfo = createAsyncThunk(
  "/user/patientPersonalInfo",
  async (personalData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/patient/addPersonalInfo",
        personalData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updatePatientPersonalInfo = createAsyncThunk(
  "/user/updatePatientPersonalInfo",
  async (personalData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        "/patient/updatePersonalInfo/",
        personalData
      );
      console.log(response.data, "Data Updated Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const patientFamilyInfo = createAsyncThunk(
  "/user/patientFamilyInfo",
  async (familyInfoData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/patient/addFamilyInfo", {
        familyDetails: familyInfoData,
      });
      console.log("Family Data Added Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const UpdateFamilyInfo = createAsyncThunk(
  "/user/updateFamilyInfo",
  async (familyData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        "/patient/updateFamilyInfo",
        familyData
      );
      console.log("Family Data Updated Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const diseaseInfo = createAsyncThunk(
  "/user/diseaseHistory",
  async (diseaseHistoryData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/patient/addDiseaseInfo", {
        diseaseDetails: diseaseHistoryData,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateDiseaseInfo = createAsyncThunk("/user/updateDiseaseInfo", async (updateDiseaseInfo , { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put("/patient/updateDiseaseInfo", updateDiseaseInfo);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})

export const uploadDocument = createAsyncThunk("user/uploadDocument" , async (documentData , { rejectWithValue})=> {
  try {
    const response = await axiosInstance.post("patient/upload" , documentData);
    return response.data;
  }
  catch (error) {
    return rejectWithValue(error.response.data);
  }
})
