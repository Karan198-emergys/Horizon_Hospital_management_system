import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CustomInput from "src/Components/Inputs/CustomsInput";
import CustomCheckBox from "src/Components/CheckBox/CustomCheckBox";
import Button from "src/Components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "src/Components/Forms/subForms/familyInfo.module.scss";
import { useForm } from "react-hook-form";
import {
  patientFamilyInfo,
  UpdateFamilyInfo,
} from "src/redux/Slices/async/AsyncFunction";
const FamilyInfo = ({ className }) => {
  const [familyFormData, setFamilyFormData] = useState(
    JSON.parse(localStorage.getItem("familyInfoDetails"))
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      father_name: familyFormData?.father_name,
      father_age: familyFormData?.father_age,
      father_country_origin: familyFormData?.father_country_origin,
      mother_name: familyFormData?.mother_name,
      mother_age: familyFormData?.mother_age,
      mother_country_origin: familyFormData?.mother_country_origin,
      parent_diabetic: familyFormData?.parent_diabetic == 1 ? true : false,
      parent_cardiac_issue:
        familyFormData?.parent_cardiac_issue === 1 ? true : false,
      parent_bp: familyFormData?.parent_bp === 1 ? true : false,
    },
  });

  const patient_id = useSelector((state) => state.patientForm.patient_id);

  useEffect(() => {
    const familySaved = localStorage.getItem("familyInfoDetails");
    if (familySaved) {
      setFamilyFormData(JSON.parse(familySaved));
    }
  }, []);

  useEffect(() => {
    if (familyFormData) {
      reset({
        father_name: familyFormData.father_name || "",
        father_age: familyFormData.father_age || "",
        father_country_origin: familyFormData.father_country_origin || "",
        mother_name: familyFormData.mother_name || "",
        mother_age: familyFormData.mother_age || "",
        mother_country_origin: familyFormData.mother_country_origin || "",
        parent_diabetic: familyFormData.parent_diabetic === 1 ? true : false,
        parent_cardiac_issue:
          familyFormData.parent_cardiac_issue === 1 ? true : false,
        parent_bp: familyFormData.parent_bp === 1 ? true : false,
      });
    }
  }, [familyFormData, reset]);

  const dispatch = useDispatch();

  const handleNext = async (data) => {
    const updatedPayload = {
      patient_id: patient_id,
      father_name: data.father_name,
      father_age: data.father_age,
      father_country_origin: data.father_country_origin,
      mother_name: data.mother_name,
      mother_age: data.mother_age,
      mother_country_origin: data.mother_country_origin,
      parent_diabetic: data?.parent_diabetic === true ? 1 : 0,
      parent_cardiac_issue: data?.parent_cardiac_issue === true ? 1 : 0,
      parent_bp: data?.parent_bp === true ? 1 : 0,
    };

    const payload = {
      patient_id: patient_id,
      father_name: data?.father_name,
      father_age: data?.father_age,
      father_country_origin: data?.father_country_origin,
      mother_name: data?.mother_name,
      mother_age: data?.mother_age,
      mother_country_origin: data?.mother_country_origin,
      parent_diabetic: data?.parent_diabetic || false,
      parent_cardiac_issue: data?.parent_cardiac_issue || false,
      parent_bp: data?.parent_bp || false,
    };

    try {
      if (!familyFormData) {
        await dispatch(patientFamilyInfo(payload)).unwrap();
        setFamilyFormData(payload);
        localStorage.setItem("familyInfoDetails", JSON.stringify(payload));
        console.log("Family Data Submitted", payload);
      } else {
        console.log("Data is being Updated", updatedPayload);
        setFamilyFormData(updatedPayload);
        localStorage.setItem(
          "familyInfoDetails",
          JSON.stringify(updatedPayload)
        );
        await dispatch(UpdateFamilyInfo(updatedPayload)).unwrap();
      }
      dispatch(nextStep());
    } catch (error) {
      console.error("Error in submitting form", error);
    }
  };

  const handleBack = () => {
    dispatch(backStep());
  };

  return (
    <form
      className={`${styles.familyForm} ${className}`}
      onSubmit={handleSubmit(handleNext)}
    >
      <div className={styles.familyDetails}>
        <label htmlFor="fatherName">
          Father&apos;s Name:
          <CustomInput
            type="text"
            placeholder="Father's Name"
            id="fatherName"
            inputName="father_name"
            register={register}
            errors={errors}
            validation={{
              required: "Father's name is required",
              minLength: {
                value: 3,
                message: "Father's name must be at least 3 characters",
              },
            }}
          />
        </label>
        <label htmlFor="fatherCountry">
          Country of Origin:
          <CustomInput
            type="text"
            placeholder="Father's country"
            id="fatherCountry"
            inputName="father_country_origin"
            register={register}
            errors={errors}
            validation={{
              required: "Father's country of origin is required",
            }}
          />
        </label>
        <label htmlFor="fatherAge">
          Age:
          <CustomInput
            type="number"
            placeholder="Father's Age"
            id="fatherAge"
            inputName="father_age"
            register={register}
            errors={errors}
            validation={{
              required: "Father's age is required",
            }}
          />
        </label>
      </div>

      <div className={styles.familyDetails}>
        <label htmlFor="motherName">
          Mother&apos;s Name:
          <CustomInput
            type="text"
            placeholder="Mother's Name"
            id="motherName"
            inputName="mother_name"
            register={register}
            errors={errors}
            validation={{
              required: "Mother's name is required",
              minLength: {
                value: 3,
                message: "Mother's name must be at least 3 characters",
              },
            }}
          />
        </label>
        <label htmlFor="motherCountry">
          Country of Origin:
          <CustomInput
            type="text"
            placeholder="Mother's country"
            id="motherCountry"
            inputName="mother_country_origin"
            register={register}
            errors={errors}
            validation={{
              required: "Mother's country of origin is required",
            }}
          />
        </label>
        <label htmlFor="motherAge">
          Age:
          <CustomInput
            type="number"
            placeholder="Mother's Age"
            id="motherAge"
            inputName="mother_age"
            register={register}
            errors={errors}
            validation={{
              required: "Mother's age is required",
            }}
          />
        </label>
      </div>

      <div className={styles.medicalHistory}>
        <label>Parental Medical History:</label>
        <CustomCheckBox
          className={styles.healthCheckBox}
          label="Blood Pressure Issue"
          id="parentBP"
          inputName="parent_bp"
          register={register}
        />
        <CustomCheckBox
          className={styles.healthCheckBox}
          label="Cardiac Issue"
          id="parentCardiac"
          inputName="parent_cardiac_issue"
          register={register}
        />
        <CustomCheckBox
          className={styles.healthCheckBox}
          label="Diabetic Issue"
          id="parentDiabetic"
          inputName="parent_diabetic"
          register={register}
        />
      </div>

      <div className={styles.familyButton}>
        <Button type="button" onclickFunction={handleBack}>
          go back
        </Button>
        {familyFormData ? (
          <Button type="submit">Update</Button>
        ) : (
          <Button type="submit">Next</Button>
        )}
      </div>
    </form>
  );
};

FamilyInfo.propTypes = {
  className: PropTypes.string,
};

export default FamilyInfo;
