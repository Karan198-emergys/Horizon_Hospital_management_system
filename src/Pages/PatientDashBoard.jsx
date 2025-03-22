import React from "react";
import PropTypes from "prop-types";


const PatientDashBoard = (props) => {
  return (
    <div>
      <h1>Patient Dashboard</h1>
      <p>Welcome, !</p>
      <p>Your patient ID is: </p>
      <p>Your current status is:</p>
    </div>
  );
};

PatientDashBoard.propTypes = {};

export default PatientDashBoard;
