import Navbar from "src/Components/navbar/Navbar";
import Profile from "src/Components/Profile/Profile";
import Sidebar from "src/Components/sidebar/Sidebar";
import patientDashBoardModule from "src/styles/PatientLanding.module.scss";
import PatientDashBoard from "./PatientDashBoard";
import { useDispatch } from "react-redux";
import { logout } from "src/redux/Slices/AuthSlice";
import { toast } from "react-toastify";
import CustomLink from "src/Components/link/CustomLink";
import { Button } from "src/Components";
import { Outlet } from "react-router-dom";

const PatientLandingPage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successful");
  };

  return (
    <div className={patientDashBoardModule.patientScreen}>
      <Navbar>
        <div className={patientDashBoardModule.profileSection}>
          Patient: <Profile />
        </div>
      </Navbar>
      <div className={patientDashBoardModule.patientDashBoard}>
        <Sidebar className={patientDashBoardModule.patientSidebar}>
          <div>
            <Button type="button" onclickFunction={handleLogout}>
              {" "}
              {/* Fixed onClick */}
              Logout
            </Button>
          </div>
        </Sidebar>
        <PatientDashBoard className={patientDashBoardModule.dashboard} />
      </div>
      <Outlet />
    </div>
  );
};

export default PatientLandingPage;
