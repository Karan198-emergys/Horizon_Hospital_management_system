import Navbar from "src/Components/navbar/Navbar";
import Profile from "src/Components/Profile/Profile";
import Sidebar from "src/Components/sidebar/Sidebar";
import patientDashBoardModule from "src/styles/PatientLanding.module.scss";
import { useDispatch } from "react-redux";
import { logout } from "src/redux/Slices/AuthSlice";
import { toast } from "react-toastify";
import { Button } from "src/Components";
import { Outlet } from "react-router-dom";
import Menu from "src/Components/Menu/Menu";
import {
  faHospitalUser,
  faHouse,
  faNotesMedical,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const PatientLandingPage = () => {
  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.authentication);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successful");
  };

  return (
    <div className={patientDashBoardModule.patientScreen}>
      <Navbar>
        <div className={patientDashBoardModule.profileSection}>
          {role === "admin" ? "Admin" : "Patient"} <Profile />
        </div>
      </Navbar>
      <div className={patientDashBoardModule.patientDashBoard}>
        <Sidebar className={patientDashBoardModule.patientSidebar}>
          <div>
            <Menu icon={faHouse}>Home</Menu>
            <Menu icon={faPerson}>Profile</Menu>
            <Menu icon={faHospitalUser} to="/user/viewPatient">
              View Patients
            </Menu>
            <Menu icon={faNotesMedical}>View Medications</Menu>
          </div>
          <div className={patientDashBoardModule.logoutButton}>
            <Button
              className={patientDashBoardModule.logout}
              type="button"
              onclickFunction={handleLogout}
            >
              Logout
            </Button>
          </div>
        </Sidebar>
        <div className={patientDashBoardModule.dashboard}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PatientLandingPage;
