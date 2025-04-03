import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./async/AsyncFunction";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("token") || null,
  firstName: "",
  lastName: "",
  email: "",
  role: localStorage.getItem("role") || null,
  isAdmin: localStorage.getItem("isAdmin") || 0,
  loading: false,
  isAuthenticated: localStorage.getItem("isAuthenticated") || false,
};

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAdmin = 0;
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.clear();
      localStorage.clear();
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Payload received:", action.payload);
        state.email = action.payload?.email;
        console.log(state.firstName, state.lastName, state.email);
        window.location.href = "/login";
        toast.success("Registration Successful");
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = "false";
        console.error("Register Failed");
        toast.error("Registration Failed");
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", true);
        state.loading = false;
        state.user = action.payload.user;
        state.firstName = action.payload?.first_name;
        state.lastName = action.payload?.last_name;
        state.isAdmin = action.payload.isAdmin;
        if (state.isAdmin) {
          state.role = "admin";
          localStorage.setItem("role", "admin");
          localStorage.setItem("isAdmin", 1);
        } else {
          state.role = "user";
          localStorage.setItem("role", "user");
          localStorage.setItem("isAdmin", 0);
        }
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.data);
      })
      .addCase(loginUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
        console.error("login Failed");
        toast.error("Invalid Credentials");
      });
  },
});

export const { logout } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
