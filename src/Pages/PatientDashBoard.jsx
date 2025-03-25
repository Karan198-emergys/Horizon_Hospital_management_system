import { useLocation } from "react-router-dom";
import PatientForm from "src/Components/Forms/PatientForm";
import CustomLink from "src/Components/link/CustomLink";
import PatientScreenModule from "src/styles/patientDashboard.module.scss";

const PatientDashBoard = (props) => {
  const location = useLocation();

  return (
    <div className={PatientScreenModule.patientScreen}>
      <div className={PatientScreenModule.addPatientSection}>
        <CustomLink className={PatientScreenModule.addPatientButton}>
          Add Patient
        </CustomLink>
        {
          (location.pathname === "/profile" ? (
            <PatientForm/>
          ) : null)
        }
      </div>
    </div>
  );
};

PatientDashBoard.propTypes = {};

export default PatientDashBoard;
