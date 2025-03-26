import React from "react";
import PropTypes from "prop-types";
import CustomInput from "src/Components/Inputs/CustomsInput";
import personalInfoStyle from "src/Components/Forms/subForms/personalInfo.module.scss";
import CustomCheckbox from "src/Components/CheckBox/CustomCheckBox";
import { Button } from "src/Components";
import { useDispatch } from "react-redux";
import { nextStep } from "src/redux/Slices/FormSlice/FormSlice";

const PersonalInfo = ({ className }) => {

  const dispatch = useDispatch();

  const personalNextButtonHandler = () => {
    dispatch(nextStep());
  };

  return (
    <form className={className}>
      <div className={personalInfoStyle.patientMainInformation}>
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
        <select name="" id="gender">
          <option value="" defaultValue="male">
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className={personalInfoStyle.bodyMetrics}>
        <label htmlFor="height">
          Height (cm):{" "}
          <CustomInput type="number" id="height" InputName="height" />
        </label>
        <label htmlFor="weight">
          Weight (kg):{" "}
          <CustomInput type="number" id="weight" InputName="weight" />
        </label>
      </div>

      <label htmlFor="country" className={personalInfoStyle.countryOrigin}>
        Country:{" "}
        <CustomInput
          type="text"
          placeholder="country"
          id="country"
          InputName="country_of_origin"
        />
      </label>
      <div className={personalInfoStyle.healthHistory}>
        <label>Health History :</label>
        <CustomCheckbox
          className={personalInfoStyle.healthCheckBox}
          label="Diabetic"
          id="isDiabetic"
        />
        <CustomCheckbox
          className={personalInfoStyle.healthCheckBox}
          label="Blood Pressure"
          id="isBloodPressure"
        />
        <CustomCheckbox
          className={personalInfoStyle.healthCheckBox}
          label="Cardiac"
          id="isCardiac"
        />
      </div>
      <div className={personalInfoStyle.personalButton}>
        <Button onclickFunction={personalNextButtonHandler}>Next Button</Button>
      </div>
    </form>
  );
};

PersonalInfo.propTypes = {
  className: PropTypes.string,
};

export default PersonalInfo;
