import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginScreen from "./Pages/LoginScreen";
import RegistrationScreen from "./Pages/RegistrationScreen";
import "src/styles/styles.scss";
import PatientLandingPage from "./Pages/PatientLandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/registration",
    element: <RegistrationScreen />,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
  {
    path: "/patientDashboard",
    element: <PatientLandingPage />,
  },
]);

const App = () => {
  return (
    <div className=" ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
