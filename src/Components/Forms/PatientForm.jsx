import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonalInfo from "src/Components/Forms/subForms/PersonalInfo";
import FamilyInfo from "./subForms/FamilyInfo";
import DiseaseInfo from "./subForms/DiseaseInfo";
import Document from "./subForms/Document";
import patientFromStyle from "./patientForm.module.scss";
import Button from "src/Components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDisease,
  faFile,
  faPeopleRoof,
  faScroll,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { closeForm } from "src/redux/Slices/FormSlice/FormSlice";
import { useDispatch } from "react-redux";

const PatientForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const { step } = useSelector((state) => state.patientForm);
  const dispatch = useDispatch();
  // const showForm = useSelector((state) => state.patientForm);

  useEffect(() => {
    setCurrentStep(parseInt(localStorage.getItem("step") || 1));
  }, [step]);

  const closeFormHandler = () => {
    dispatch(closeForm());
  };

  return (
    <div className={patientFromStyle.patientFormSection}>
      <div
        className={`${patientFromStyle.stepHeader} { currentStep === 1 ? ${patientFromStyle.active_Step} }`}
      >
        <div className={patientFromStyle.stepperWrapper}>
          <div className={patientFromStyle.step_item}>
            <FontAwesomeIcon icon={faScroll} />
          </div>
          <div className={patientFromStyle.stepperLine}>
            <span></span>
          </div>
          <div className={patientFromStyle.step_item}>
            <FontAwesomeIcon icon={faPeopleRoof} />
          </div>
          <div className={patientFromStyle.stepperLine}>
            <span></span>
          </div>
          <div className={patientFromStyle.step_item}>
            <FontAwesomeIcon icon={faDisease} />
          </div>
          <div className={patientFromStyle.stepperLine}>
            <span></span>
          </div>
          <div className={patientFromStyle.step_item}>
            <FontAwesomeIcon icon={faFile} />
          </div>
        </div>
        <div className={patientFromStyle.closeForm}>
          <Button
            className={patientFromStyle.closeButton}
            onclickFunction={closeFormHandler}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
      </div>
      <div className={patientFromStyle.formUnderline}>
        <span></span>
      </div>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <FamilyInfo />}
      {currentStep === 3 && <DiseaseInfo />}
      {currentStep === 4 && <Document />}
    </div>
  );
};

export default PatientForm;
