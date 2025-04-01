import { Outlet, useLocation } from "react-router-dom";
import PatientForm from "src/Components/Forms/PatientForm";
import CustomLink from "src/Components/link/CustomLink";
import PatientScreenModule from "src/styles/patientDashboard.module.scss";
import ViewPatient from "./patient-Pages/ViewPatient";

const PatientDashBoard = () => {
  const location = useLocation();



  return (
    <div className={PatientScreenModule.patientScreen}>
      <div className={PatientScreenModule.welcome}>
        <div className={PatientScreenModule.welcomeText}>
          <span>
            Welcome Back , <br />
            karan's
          </span>
        </div>
        <div className={PatientScreenModule.addPatientSection}>
          <CustomLink
            to="/user/patientForm"
            className={PatientScreenModule.addPatientButton}
          >
            Add Patient
          </CustomLink>
        </div>
      </div>
      <div>
        {location.pathname === "/patientForm" && <PatientForm />}
        {location.pathname === "/patient" && <ViewPatient />}
      </div>
      <Outlet />
    </div>
  );
};

PatientDashBoard.propTypes = {};

export default PatientDashBoard;
