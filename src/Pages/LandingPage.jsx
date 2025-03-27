import React from "react";
import { CustomLinks } from "../Components/index";
import Navbar from "../Components/navbar/Navbar";
import LandingModule from "../styles/Landing.module.scss";

const LandingPage = () => {
  return (
    <div className={LandingModule.landingPage}>
      <Navbar className>
        <div className={LandingModule.authenticationButtons}>
          <div className={LandingModule.loginButton}>
            <CustomLinks className={LandingModule.loginLinkButton} to="/login">
              Login
            </CustomLinks>
          </div>
          <div className={LandingModule.registerButton}>
            <CustomLinks
              className={LandingModule.registerLinkButton}
              to="/registration"
            >
              Sign Up
            </CustomLinks>
          </div>
        </div>
      </Navbar>
      <div className={LandingModule.bannerSection}></div>
    </div>
  );
};

export default LandingPage;
