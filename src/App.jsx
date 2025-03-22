import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/styles/styles.scss";
import LandingPage from "./Pages/LandingPage";
import LoginScreen from "./Pages/LoginScreen";
import RegistrationScreen from "./Pages/RegistrationScreen";
<<<<<<< Updated upstream
import "src/styles/styles.scss";
import PatientLandingPage from "./Pages/PatientLandingPage";
=======
>>>>>>> Stashed changes

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
