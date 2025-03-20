import React from "react";
import { CustomLinks } from "../Components/index";
import Navbar from "../Components/navbar/Navbar";
import { LandingModule } from "../styles/indexStyle";

const LandingPage = () => {
  return (
    <div className={LandingModule.landingPage}>
      <Navbar className>
        <div className={LandingModule.authenticationButtons}>
          <div className={LandingModule.loginButton}>
            <CustomLinks className={LandingModule.loginLinkButton} to="/login">
              Logins
            </CustomLinks>
          </div>
          <div>
            <CustomLinks
              className="text-xl bg-green-400 border-0 border-green-400 text-gray-800 cursor-pointer"
              to="/registration"
            >
              Sign Up
            </CustomLinks>
          </div>
        </div>
      </Navbar>
      <div className="bannerContainer"></div>
    </div>
  );
};

export default LandingPage;
