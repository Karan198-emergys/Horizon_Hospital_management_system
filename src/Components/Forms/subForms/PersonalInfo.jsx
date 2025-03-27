import React from "react";
import PropTypes from "prop-types";
import CustomInput from "src/Components/Inputs/CustomsInput";
import CustomCheckbox from "src/Components/CheckBox/CustomCheckBox";
import { Button } from "src/Components";
import { useDispatch } from "react-redux";
import { nextStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "src/Components/Forms/subForms/personalInfo.module.scss";

const PersonalInfo = ({ className }) => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextStep());
  };

  return (
    <form className={`${styles.personalForm} ${className}`}>
      <div className={styles.patientMainInformation}>
        <label htmlFor="patientName">
          Patient Name:
          <CustomInput type="text" placeholder="Patient Name" id="patientName" InputName="patient_name" />
        </label>
        <label htmlFor="DOB">
          Date of Birth:
          <CustomInput type="date" id="DOB" InputName="date_of_birth" />
        </label>
        <select id="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className={styles.bodyMetrics}>
        <label htmlFor="height">
          Height (cm):
          <CustomInput type="number" id="height" InputName="height" />
        </label>
        <label htmlFor="weight">
          Weight (kg):
          <CustomInput type="number" id="weight" InputName="weight" />
        </label>
      </div>

      <label htmlFor="country" className={styles.countryOrigin}>
        Country:
        <CustomInput type="text" placeholder="Country" id="country" InputName="country_of_origin" />
      </label>

      <div className={styles.healthHistory}>
        <label>Health History:</label>
        <CustomCheckbox className={styles.healthCheckBox} label="Diabetic" id="isDiabetic" />
        <CustomCheckbox className={styles.healthCheckBox} label="Blood Pressure" id="isBloodPressure" />
        <CustomCheckbox className={styles.healthCheckBox} label="Cardiac" id="isCardiac" />
      </div>

      <div className={styles.personalButton}>
        <Button onclickFunction={handleNext}>Next</Button>
      </div>
    </form>
  );
};

PersonalInfo.propTypes = {
  className: PropTypes.string,
};

export default PersonalInfo;