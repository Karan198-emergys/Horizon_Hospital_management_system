import React from "react";
import { CustomLinks } from "../Components/index";
import Navbar from "../Components/navbar/Navbar";
import LandingModule from "../styles/Landing.module.scss";
import landingImage from "src/assets/landingPageImage.png";

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
      <div className={LandingModule.bannerSection}>
        <div className={LandingModule.featureSlogan}>
          <h1>Welcome to the Horizon ,</h1>
          <span>Where we made easy</span>
          <div className={LandingModule.mainFeature}>
            <h2> 🩺 Patient</h2>{" "}
            <span>
              Booking appointments , accessing records and connecting with the doctor
              effortlessly
            </span>
          </div>
          <div className={LandingModule.mainFeature}>
            <h2> 👨‍⚕️ Doctor</h2>{" "}
            <span>
              Managing patient history , prescription , and schedules with ease
            </span>
          </div>
          <div className={LandingModule.mainFeature}>
            <h2> 🏥 Admin</h2>{" "}
            <span>
              Oversee hospital operations , staff , and resources seamlessly
            </span>
          </div>
          <div className={LandingModule.getStartedButton}>
            <CustomLinks
              className={LandingModule.getStartedLinkButton}
              to="/login"
            >
              Get Started
            </CustomLinks>
          </div>
        </div>
        <img src={landingImage} alt="landing page image" />
      </div>
    </div>
  );
};

export default LandingPage;
