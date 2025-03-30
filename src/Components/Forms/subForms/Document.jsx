import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "src/Components";
import { backStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "./document.module.scss";
import CustomsInput from "src/Components/Inputs/CustomsInput";
import {
  documentUpload,
  stepReset,
} from "src/redux/Slices/FormSlice/FormSlice";

const Document = ({}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.file[0];
    if (!file) return;
    const previewURL = URL.createObjectURL(file);
    if (file) {
      dispatch(documentUpload({ file, previewURL }));
    }

    // Upload the file to the server
    const formData = new FormData();
    formData.append("file", file);
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
          <img src="" alt="" />
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
