import { Outlet, useLocation } from "react-router-dom";
import PatientForm from "src/Components/Forms/PatientForm";
import CustomLink from "src/Components/link/CustomLink";
import PatientScreenModule from "src/styles/patientDashboard.module.scss";
import ViewPatient from "./patient-Pages/ViewPatient";
import patientLandingImage from "src/assets/patientLandingImage.png";
import Button from "src/Components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { openForm } from "src/redux/Slices/FormSlice/FormSlice";

const PatientDashBoard = () => {
  const dispatch = useDispatch();

  const { showForm } = useSelector((state) => state.patientForm);

  const formHandler = () => {
    console.log("Form Opened");
    dispatch(openForm());
  };

  return (
    <div className={PatientScreenModule.patientScreen}>
      <div>
        <div className={PatientScreenModule.welcome}>
          <div className={PatientScreenModule.welcomeText}>
            <span>Welcome Back ,</span>
          </div>
          <div className={PatientScreenModule.addPatientSection}>
            <Button
              className={PatientScreenModule.addPatientButton}
              onclickFunction={formHandler}
            >
              Add Patient
            </Button>
          </div>
          <img src={patientLandingImage} alt="" />
        </div>
        <div>{showForm ? <PatientForm /> : ""}</div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

PatientDashBoard.propTypes = {};

export default PatientDashBoard;
