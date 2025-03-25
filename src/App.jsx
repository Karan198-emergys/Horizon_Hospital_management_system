import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.scss"; // Removed unnecessary "../src/"
import LandingPage from "./Pages/LandingPage";
import LoginScreen from "./Pages/LoginScreen";
import RegistrationScreen from "./Pages/RegistrationScreen";
import PatientLandingPage from "./Pages/PatientLandingPage";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PatientForm from "./Components/Forms/PatientForm";

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
    path: "/user",
    element: (
      <ProtectedRoutes allowedRoles="user">
        <PatientLandingPage />
      </ProtectedRoutes>
    ),
    children: [{ path: "profile", element: <PatientForm /> }],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes allowedRoles="admin">
        <div>this is the admin dashboards</div>
      </ProtectedRoutes>
    ),
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
