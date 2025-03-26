import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonalInfo from "src/Components/Forms/subForms/PersonalInfo";
import FamilyInfo from "./subForms/FamilyInfo";
import DiseaseInfo from "./subForms/DiseaseInfo";
import Document from "./subForms/Document";
import patientFromStyle from "./patientForm.module.scss";

const PatientForm = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const { step } = useSelector((state) => state.patientForm);

  useEffect(() => {
    setCurrentStep(parseInt(localStorage.getItem("step") || 1,10));
  }, [step]);

  return (
    <div className={patientFromStyle.patientFormSection}>
      <h1>Patient Form</h1>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <FamilyInfo />}
      {currentStep === 3 && <DiseaseInfo />}
      {currentStep === 4 && <Document />}
    </div>
  );
};

export default PatientForm;
