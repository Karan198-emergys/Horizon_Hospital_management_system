import React from "react";
import PropTypes from "prop-types";
import CustomInput from "src/Components/Inputs/CustomsInput";
import CustomCheckbox from "src/Components/CheckBox/CustomCheckBox";
import { Button } from "src/Components";
import { useDispatch } from "react-redux";
import { nextStep , backStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "src/Components/Forms/subForms/familyInfo.module.scss";

const FamilyInfo = ({ className }) => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(backStep());
  };


  return (
    <form className={`${styles.familyForm} ${className}`}>
      <div className={styles.familyDetails}>
        <label htmlFor="fatherName">
          Father&apos;s Name:
          <CustomInput type="text" placeholder="Father&apos;s Name" id="fatherName" InputName="father_name" />
        </label>
        <label htmlFor="fatherCountry">
          Country of Origin:
          <CustomInput type="text" placeholder="Country" id="fatherCountry" InputName="father_country" />
        </label>
        <label htmlFor="fatherAge">
          Age:
          <CustomInput type="number" placeholder=" Father Age" id="fatherAge" InputName="father_age" />
        </label>
      </div>

      <div className={styles.familyDetails}>
        <label htmlFor="motherName">
          Mother&apos;s Name:
          <CustomInput type="text" placeholder="Mother&apos;s Name" id="motherName" InputName="mother_name" />
        </label>
        <label htmlFor="motherCountry">
          Country of Origin:
          <CustomInput type="text" placeholder="Country" id="motherCountry" InputName="mother_country" />
        </label>
        <label htmlFor="motherAge">
          Age:
          <CustomInput type="number" placeholder=" Mother Age" id="motherAge" InputName="mother_age" />
        </label>
      </div>

      <div className={styles.medicalHistory}>
        <label>Parental Medical History:</label>
        <CustomCheckbox className={styles.healthCheckBox} label="Blood Pressure Issue" id="parentBP" />
        <CustomCheckbox className={styles.healthCheckBox} label="Cardiac Issue" id="parentCardiac" />
        <CustomCheckbox className={styles.healthCheckBox} label="Diabetic Issue" id="parentDiabetic" />
      </div>

      <div className={styles.familyButton}>
        <Button onclickFunction={handleBack}>Go back</Button>
        <Button onclickFunction={handleNext}>Next</Button>
      </div>
    </form>
  );
};

FamilyInfo.propTypes = {
  className: PropTypes.string,
};

export default FamilyInfo;
