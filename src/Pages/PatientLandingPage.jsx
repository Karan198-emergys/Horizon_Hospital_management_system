import React from "react";
import PropTypes from "prop-types";
import Navbar from "src/Components/navbar/Navbar";
import PatientDashBoardModule from "src/styles"
import Sidebar from "src/Components/sidebar/Sidebar";
import PatientDashBoard from "./PatientDashBoard";

const PatientLandingPage = (props) => {
  return (
    <div className={PatientDashBoardModule.patientScreen}>
      <Navbar />
      <div className={PatientDashBoardModule.patientDashBoard}>
        <Sidebar className={PatientDashBoardModule.patientSidebar} />
        <PatientDashBoard />
      </div>
    </div>
  );
};

PatientLandingPage.propTypes = {};

export default PatientLandingPage;
