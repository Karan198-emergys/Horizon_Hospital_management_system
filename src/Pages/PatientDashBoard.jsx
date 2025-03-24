import PatientScreenModule from "src/styles/patientDashboard.module.scss";


const PatientDashBoard = (props) => {
  return (
    <div className={PatientScreenModule.patientScreen }>
      <h1>Patient Dashboard</h1>
      <p>Welcome, !</p>
      <p>Your patient ID is: </p>
      <p>Your current status is:</p>
    </div>
  );
};

PatientDashBoard.propTypes = {};

export default PatientDashBoard;
