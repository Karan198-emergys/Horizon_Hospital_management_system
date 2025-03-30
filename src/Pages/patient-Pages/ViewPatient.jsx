import React from "react";
import PropTypes from "prop-types";
import viewPatientStyle from "src/styles/viewPatient.module.scss";

const ViewPatient = ({}) => {
  return (
    <div className={viewPatientStyle.viewPatientMainClass}>
      this are the patient is the Components
    </div>
  );
};

ViewPatient.propTypes = {};

export default ViewPatient;
