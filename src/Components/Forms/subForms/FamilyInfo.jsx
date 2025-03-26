import React from "react";
import PropTypes from "prop-types";
import familyInfoStyle from "./FamilyInfo.module.scss";
import { useDispatch } from "react-redux";
import { nextStep } from "src/redux/Slices/FormSlice/FormSlice";
import CustomInput from "src/Components/Inputs/CustomsInput";
import CustomCheckbox from "src/Components/CheckBox/CustomCheckBox";
import { Button } from "src/Components";

const FamilyInfo = ({ className }) => {
  const dispatch = useDispatch();

  const personalNextButtonHandler = () => {
    dispatch(nextStep());
  };

  return (
    <div>
      <form className={className}>
        <div className={familyInfoStyle.patientMainInformation}>
          <label htmlFor="patientName">
            Patient Name:{" "}
            <CustomInput
              type="text"
              placeholder="Patient Name"
              id="patientName"
              InputName="patient_name"
            />
          </label>
          <label htmlFor="DOB">
            Date of Birth:{" "}
            <CustomInput type="date" id="DOB" InputName="date_of_birth" />
          </label>
        </div>
        <div className={familyInfoStyle.bodyMetrics}>
          <label htmlFor="height">
            Height (cm):{" "}
            <CustomInput type="number" id="height" InputName="height" />
          </label>
          <label htmlFor="weight">
            Weight (kg):{" "}
            <CustomInput type="number" id="weight" InputName="weight" />
          </label>
        </div>

        <label htmlFor="country" className={familyInfoStyle.countryOrigin}>
          Country:{" "}
          <CustomInput
            type="text"
            placeholder="country"
            id="country"
            InputName="country_of_origin"
          />
        </label>
        <div className={familyInfoStyle.healthHistory}>
          <label>Health History :</label>
          <CustomCheckbox
            className={familyInfoStyle.healthCheckBox}
            label="Diabetic"
            id="isDiabetic"
          />
          <CustomCheckbox
            className={familyInfoStyle.healthCheckBox}
            label="Blood Pressure"
            id="isBloodPressure"
          />
          <CustomCheckbox
            className={familyInfoStyle.healthCheckBox}
            label="Cardiac"
            id="isCardiac"
          />
        </div>
        <div className={familyInfoStyle.personalButton}>
          <Button onclickFunction={personalNextButtonHandler}>
            Next Button
          </Button>
        </div>
      </form>
    </div>
  );
};

FamilyInfo.propTypes = {};

export default FamilyInfo;
