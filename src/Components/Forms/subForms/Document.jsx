import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "src/Components";
import { backStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "./document.module.scss";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import {
  documentUpload,
  stepReset,
} from "src/redux/Slices/FormSlice/FormSlice";
import { useState } from "react";
import { uploadDocument } from "src/redux/Slices/async/AsyncFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

const Document = ({}) => {
  const [document, setDocument] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { patient_id } = useSelector((state) => state.patientForm);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileName = e.target.name;
    if (!file) return;
    const previewURL = URL.createObjectURL(file);
    if (file) {
      setDocument((prev) => ({
        ...prev,
        [fileName]: previewURL,
        [fileName + "_file"]: file,
      }));
    }
  };

  const handleSubmit = () => {
    navigate("/user");
    localStorage.removeItem("personalInfoDetails");
    localStorage.removeItem("familyInfoDetails");
    localStorage.removeItem("diseaseInfoDetails");
    dispatch(stepReset());
  };

  const handleBack = () => {
    dispatch(backStep());
  };

  return (
    <form>
      <div className={styles.documentContainerClass}>
        <div className={styles.documentContainer}>
          <label htmlFor="adharFrontSide">Adhar card (Front)</label>
          <CustomsInput
            type="file"
            acceptingTypes="image/png , image.jpeg, .doc , pdf"
            onChange={handleFileChange}
            name="adhar_front_side"
          />
          {document.adhar_front_side && (
            <img src={document.adhar_front_side} alt="Adhar front" />
          )}
          <div className={styles.documentFunctionalButton}>
            <Button
              onclickFunction={() => {
                const payload = new FormData();
                payload.append("file", document.adhar_front_side_file);
                payload.append("document_type", "Adhar card front");
                payload.append("patient_id", patient_id);
                dispatch(uploadDocument({ data: payload }));
                console.log(payload);
              }}
            >
              <FontAwesomeIcon icon={faUpload} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </div>
        <div className={styles.documentContainer}>
          <label htmlFor="adharBackSide">Adhar card (back)</label>
          <CustomsInput
            type="file"
            id="adharBackSide"
            acceptingTypes="image/png , image.jpeg, .doc , pdf"
            onChange={handleFileChange}
            name="adhar_back_side"
          />
          {document.adhar_back_side && (
            <img src={document.adhar_back_side} alt=" adhar back" />
          )}
          <div className={styles.documentFunctionalButton}>
            <Button
              onclickFunction={() => {
                const payload = new FormData();
                payload.append("file", document.adhar_back_side_file);
                payload.append("document_type", "Adhar card Back");
                payload.append("patient_id", patient_id);
                dispatch(uploadDocument({ data: payload }));
                console.log(payload);
              }}
            >
              <FontAwesomeIcon icon={faUpload} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </div>
        <div className={styles.documentContainer}>
          <label htmlFor="medicalInsuranceFrontSide">
            Medical Insurance (front)
          </label>
          <CustomsInput
            type="file"
            id="medicalInsuranceFrontSide"
            acceptingTypes="image/png , image.jpeg, .doc , pdf"
            onChange={handleFileChange}
            name="medical_insurance_front_side"
          />
          {document.medical_insurance_back_side && (
            <img
              src={document.medical_insurance_back_side}
              alt="Medical Insurance Back side"
            />
          )}

          <div className={styles.documentFunctionalButton}>
            <Button
              onclickFunction={() => {
                const payload = new FormData();
                payload.append(
                  "file",
                  document.medical_insurance_front_side_file
                );
                payload.append("document_type", "Adhar card front");
                payload.append("patient_id", patient_id);
                dispatch(uploadDocument({ data: payload }));
                console.log(payload);
              }}
            >
              <FontAwesomeIcon icon={faUpload} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </div>
        <div className={styles.documentContainer}>
          <label htmlFor="medicalInsuranceBackSide">
            Medical Insurance (Back)
          </label>
          <CustomsInput
            type="file"
            id="medicalInsuranceBackSide"
            acceptingTypes="image/png , image.jpeg, .doc , pdf"
            onChange={handleFileChange}
            name="medical_insurance_back_side"
          />
          {document.medical_insurance_front_side && (
            <img
              src={document.medical_insurance_back_side}
              alt=" Medical Insurance Back side "
            />
          )}
          <div className={styles.documentFunctionalButton}>
            <Button
              onclickFunction={() => {
                const payload = new FormData();
                payload.append(
                  "file",
                  document.medical_insurance_back_side_file
                );
                payload.append("document_type", "Adhar card front");
                payload.append("patient_id", patient_id);
                dispatch(uploadDocument({ data: payload }));
                console.log(payload);
              }}
            >
              <FontAwesomeIcon icon={faUpload} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.documentButton}>
        <Button onclickFunction={handleBack}>Go back</Button>
        <Button onclickFunction={handleSubmit}>Submit</Button>
      </div>
    </form>
  );
};
Document.propTypes = {};

export default Document;
