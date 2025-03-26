import { Outlet, useLocation } from "react-router-dom";
import PatientForm from "src/Components/Forms/PatientForm";
import CustomLink from "src/Components/link/CustomLink";
import PatientScreenModule from "src/styles/patientDashboard.module.scss";
import ViewPatient from "./patient-Pages/ViewPatient";

const PatientDashBoard = (props) => {
  const location = useLocation();

  return (
    <div className={PatientScreenModule.patientScreen}>
      <div className={PatientScreenModule.addPatientSection}>
        <CustomLink to="/user/patientForm" className={PatientScreenModule.addPatientButton}>
          Add Patient
        </CustomLink>
        {location.pathname === "/patientForm" && <PatientForm />}
        {location.pathname === "/patient"&& <ViewPatient />}
      </div>
      <Outlet />
    </div>
  );
};

PatientDashBoard.propTypes = {};

export default PatientDashBoard;
