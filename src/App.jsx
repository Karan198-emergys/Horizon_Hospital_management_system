import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/styles/styles.scss";
import LandingPage from "./Pages/LandingPage";
import LoginScreen from "./Pages/LoginScreen";
import RegistrationScreen from "./Pages/RegistrationScreen";
import "src/styles/styles.scss";
import PatientLandingPage from "./Pages/PatientLandingPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { Children } from "react";

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
    path: "/dashboard",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard/patientDashboard",
        element: <PatientLandingPage />,
        // children:[

        // ]
      },
      {
        path: "/dashboard/adminDashboard",
        element: <div>Admin Dashboard</div>,
      },
    ],
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
