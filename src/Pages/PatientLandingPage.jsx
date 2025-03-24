import Navbar from "src/Components/navbar/Navbar";
import Profile from "src/Components/Profile/Profile";
import Sidebar from "src/Components/sidebar/Sidebar";
import patientDashBoardModule from "src/styles/PatientLanding.module.scss";
import PatientDashBoard from "./PatientDashBoard";
import { Button } from "src/Components";

const PatientLandingPage = (props) => {
  return (
    <div className={patientDashBoardModule.patientScreen}>
      <Navbar>
        <div className={patientDashBoardModule.profileSection}>
          Patient :
          <Profile />
        </div>
      </Navbar>
      <div className={patientDashBoardModule.patientDashBoard}>
        <Sidebar className={patientDashBoardModule.patientSidebar}>
          <div>
            <Button type="button">Logout</Button>
          </div>
        </Sidebar>
        <PatientDashBoard className={patientDashBoardModule.dashboard} />
      </div>
    </div>
  );
};

PatientLandingPage.propTypes = {};

export default PatientLandingPage;
