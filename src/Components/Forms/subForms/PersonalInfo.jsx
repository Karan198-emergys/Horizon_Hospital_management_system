import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import CustomCheckBox from "src/Components/CheckBox/CustomCheckBox";
import Button from "src/Components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "src/Components/Forms/subForms/personalInfo.module.scss";
import {
  patientPersonalInfo,
  updatePatientPersonalInfo,
} from "src/redux/Slices/async/AsyncFunction";

const PersonalInfo = ({ className }) => {
  const [personalFormData, setPersonalFormData] = useState(
    JSON.parse(localStorage.getItem("personalInfoDetails"))
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      patient_name: personalFormData?.patient_name,
      date_of_birth: personalFormData?.date_of_birth,
      gender: personalFormData?.gender,
      country_of_origin: personalFormData?.country_of_origin,
      height: personalFormData?.height,
      is_diabetic: personalFormData?.is_diabetic === 1 ? true : false,
      blood_pressure: personalFormData?.blood_pressure === 1 ? true : false,
      cardiac_issue: personalFormData?.cardiac_issue === 1 ? true : false,
    },
  });

  const { loading, isUpdating, patient_id } = useSelector(
    (state) => state.patientForm
  );

  useEffect(() => {
    console.log("1st useEffect");
    const personalSaved = localStorage.getItem("personalInfoDetails");
    if (personalSaved) {
      setPersonalFormData(JSON.parse(personalSaved));
    }
  }, []);

  useEffect(() => {
    console.log("2nd useEffect");
    if (personalFormData) {
      reset({
        patient_name: personalFormData.patient_name || "",
        date_of_birth: personalFormData.date_of_birth || "",
        gender: personalFormData.gender || "",
        country_of_origin: personalFormData.country_of_origin || "",
        height: personalFormData.height || "",
        weight: personalFormData.weight || "",
        is_diabetic: personalFormData?.is_diabetic === 1 ? true : false,
        blood_pressure: personalFormData?.blood_pressure === 1 ? true : false,
        cardiac_issue: personalFormData?.cardiac_issue === 1 ? true : false,
      });
    }
  }, []);

  const dispatch = useDispatch();

  const handleNext = async (data) => {
    const updatedPayload = {
      patient_id: patient_id,
      patient_name: data.patient_name,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      country_of_origin: data.country_of_origin,
      height: data.height,
      weight: data.weight,
      is_diabetic: data?.is_diabetic === true ? 1 : 0,
      blood_pressure: data?.blood_pressure === true ? 1 : 0,
      cardiac_issue: data?.cardiac_issue === true ? 1 : 0,
    };

    const payload = {
      patient_name: data.patient_name,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      country_of_origin: data.country_of_origin,
      height: data.height,
      weight: data.weight,
      is_diabetic: data?.is_diabetic || false,
      blood_pressure: data?.blood_pressure || false,
      cardiac_issue: data?.cardiac_issue || false,
    };

    try {
      if (!personalFormData) {
        await dispatch(patientPersonalInfo(payload)).unwrap();
        localStorage.setItem("personalInfoDetails", JSON.stringify(payload));
        console.log("personal Data", payload);
      } else {
        console.log("Data is being Updating", updatedPayload);
        setPersonalFormData(updatedPayload);
        localStorage.setItem(
          "personalInfoDetails",
          JSON.stringify(updatedPayload)
        );
        await dispatch(updatePatientPersonalInfo(updatedPayload)).unwrap();
      }
      dispatch(nextStep());
    } catch (error) {
      console.error("Error in submitting form", error);
    }
  };

  return (
    <form
      className={`${styles.personalForm} ${className}`}
      onSubmit={handleSubmit(handleNext)}
    >
      <div className={styles.patientMainInformation}>
        <label htmlFor="patientName">
          Patient Name:
          <CustomsInput
            type={"text"}
            placeholder={"Patient Name"}
            id={"patientName"}
            inputName={"patient_name"}
            register={register}
            errors={errors}
            validation={{
              required: true,
              min: {
                value: 4,
                message: "4 character required",
              },
              max: {
                value: 15,
                message: "15 character allowed",
              },
              pattern: {
                value: /^[A-Za-z ]{1,14}$/,
                message: "Only alphabets and spaces allowed",
              },
            }}
          />
        </label>
        <label htmlFor="DOB">
          Date of Birth:
          <CustomsInput
            type="date"
            id="DOB"
            inputName="date_of_birth"
            register={register}
            errors={errors}
            validation={{
              required: true,
              min: {
                value: new Date(1900, 0, 1),
                message: "Invalid date of birth",
              },
              max: {
                value: new Date().toISOString().split("T")[0],
                message: "Invalid date of birth",
              },
            }}
            maxLength={`new Date().toISOString().split("T")[0];`}
          />
        </label>
        <select
          id="gender"
          {...register("gender", { required: "Please select a gender" })}
        >
          <option value="" selected disabled hidden>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <span>{errors.gender.message}</span>}
      </div>

      <div className={styles.bodyMetrics}>
        <label htmlFor="height">
          Height (Feet):
          <CustomsInput
            type="number"
            id="height"
            step="0.01"
            inputName="height"
            register={register}
            errors={errors}
            minLength={1}
            maxLength={8}
            validation={{
              required: "Please enter height",
              min: { value: 1, message: "Invalid height" },
              max: { value: 8, message: "Invalid height" },
            }}
          />
        </label>
        <label htmlFor="weight">
          Weight (kg):
          <CustomsInput
            type="number"
            id="weight"
            register={register}
            errors={errors}
            inputName="weight"
            validation={{
              required: "Please enter weight",
              min: { value: 10, message: "Invalid weight" },
              max: { value: 400, message: "Invalid weight" },
            }}
          />
        </label>
      </div>

      <label htmlFor="country" className={styles.countryOrigin}>
        Country:
        <CustomsInput
          type="text"
          placeholder="Country"
          id="country"
          inputName="country_of_origin"
          register={register}
          errors={errors}
          validation={{
            required: "Please enter country of origin",
            min: { value: 3, message: "Invalid country of origin" },
            max: { value: 30, message: "Invalid country of origin" },
            pattern: {
              value: /^[A-Za-z ]{1,30}$/,
              message: "Only alphabets and spaces allowed",
            },
          }}
        />
      </label>

      <div className={styles.healthHistory}>
        <label>Health History:</label>
        <CustomCheckBox
          className={styles.healthCheckBox}
          label="Diabetic"
          id="isDiabetic"
          inputName="is_diabetic"
          register={register}
        />
        <CustomCheckBox
          className={styles.healthCheckBox}
          label="Blood Pressure"
          id="isBloodPressure"
          inputName="blood_pressure"
          register={register}
        />
        <CustomCheckBox
          className={styles.healthCheckBox}
          label="Cardiac"
          id="isCardiac"
          inputName="cardiac_issue"
          register={register}
        />
      </div>
      {personalFormData ? (
        <div className={styles.personalButton}>
          <Button type="submit">{isUpdating ? "Updating..." : "Update"}</Button>
        </div>
      ) : (
        <div className={styles.personalButton}>
          <Button type="submit"> {loading ? "Submitting" : "Next"}</Button>
        </div>
      )}
    </form>
  );
};

PersonalInfo.propTypes = {
  className: PropTypes.string,
};

export default PersonalInfo;
