import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { axiosInstance } from "src/Services/utils";

export const loginUser = createAsyncThunk(
  "authentication/loginUser", // this is the action name which will be define the action creator function and which type of action will be dispatched
  async (Credential, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/login", Credential);
      toast.success("Login Successful");
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
