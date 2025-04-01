import { useDispatch, useSelector } from "react-redux";
import Button from "src/Components/button/Button";
import { backStep, nextStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "./diseaseInfo.module.scss";
import PropTypes from "prop-types";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  diseaseInfo,
  updateDiseaseInfo,
} from "src/redux/Slices/async/AsyncFunction";

const DiseaseInfo = ({ className }) => {
  const [diseaseFormData, setDiseaseFormData] = useState(
    JSON.parse(localStorage.getItem("diseaseInfoDetails"))
  );

  const { loading } = useSelector((state) => state.patientForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      disease_type: diseaseFormData?.disease_type || "",
      disease_description: diseaseFormData?.disease_description || "",
    },
  });

  const patient_id = useSelector((state) => state.patientForm.patient_id);

  useEffect(() => {
    const savedDiseaseInfo = localStorage.getItem("diseaseInfoDetails");
    if (savedDiseaseInfo) {
      setDiseaseFormData(JSON.parse(savedDiseaseInfo));
    }
  }, []);

  useEffect(() => {
    if (diseaseFormData) {
      reset({
        disease_type: diseaseFormData.disease_type,
        disease_description: diseaseFormData.disease_description,
      });
    }
  }, [diseaseFormData, reset]);

  const dispatch = useDispatch();

  const handleNext = async (data) => {
    const payload = {
      patient_id: patient_id,
      disease_type: data.disease_type,
      disease_description: data.disease_description,
    };

    const updatedPayload = {
      patient_id: patient_id,
      disease_type: data.disease_type,
      disease_description: data.disease_description,
    };
    try {
      if (!diseaseFormData) {
        await dispatch(diseaseInfo(payload));
        localStorage.setItem("diseaseInfoDetails", JSON.stringify(payload));
      } else {
        console.log("Data is being Updated", updatedPayload);
        await dispatch(updateDiseaseInfo(updatedPayload));
        setDiseaseFormData(updatedPayload);
        localStorage.setItem(
          "diseaseInfoDetails",
          JSON.stringify(updatedPayload)
        );
      }
      dispatch(nextStep());
    } catch (error) {
      console.error("Error in submitting form", error);
    }
  };

  const backButton = () => {
    dispatch(backStep());
  };

  return (
    <form onSubmit={handleSubmit(handleNext)} className={className}>
      <div className={styles.diseaseName}>
        <label htmlFor="disease_type">Disease name:</label>
        <CustomsInput
          id="disease_type"
          inputMainCLassName={styles.inputContainer}
          placeholder="Enter the Disease name"
          register={register}
          inputName="disease_type"
          errors={errors}
          validation={{
            required: "Disease name is required",
            maxLength: {
              value: 50,
              message: "Disease name should not exceed 50 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9\s.,!?'-]*$/,
              message:
                "Disease name should contain only alphabets, numbers, spaces, commas, periods, exclamation marks, question marks, apostrophes, and hyphens",
            },
          }}
        />
      </div>
      <div className={styles.diseaseDescription}>
        <label htmlFor="disease_description">Disease description:</label>
        <textarea
          id="disease_description"
          rows="2"
          cols="50"
          placeholder="Enter the Disease description"
          {...register("disease_description", {
            required: "Disease description is required",
            maxLength: {
              value: 2000,
              message: "Disease description should not exceed 2000 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9\s.,!?'-]*$/,
              message:
                "Disease description should contain only alphabets, numbers, spaces, commas, periods, exclamation marks, question marks, apostrophes, and hyphens",
            },
          })}
        />
        {errors.disease_description && (
          <span>{errors.disease_description.message}</span>
        )}
      </div>
      <div className={styles.diseaseButton}>
        <Button onclickFunction={backButton}>Go back</Button>
        {diseaseFormData ? (
          <Button type="submit">Update</Button>
        ) : (
          <Button type="submit">{loading ? "Submitting" : "Next"}</Button>
        )}
      </div>
    </form>
  );
};

DiseaseInfo.propTypes = {
  className: PropTypes.string,
};

export default DiseaseInfo;
