import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./async/AsyncFunction";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  role: null,
  isAdmin: 0,
  token: null,
  isAuthenticated: false,
  loading: false,
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
      localStorage.removeItem("token");
      window.location.href = "/login";
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        toast.success("registered Successfully");
        window.location.href = "/login";
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
        state.loading = false;
        state.user = action.payload.user;
        state.isAdmin = action.payload.isAdmin;
        if (state.isAdmin) {
          state.role = "admin";
          localStorage.setItem("isAdmin", true);
        } else {
          state.role = "user";
          localStorage.setItem("isAdmin", 0);
        }
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
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
