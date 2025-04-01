import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PersonalInfo from "src/Components/Forms/subForms/PersonalInfo";
import FamilyInfo from "./subForms/FamilyInfo";
import DiseaseInfo from "./subForms/DiseaseInfo";
import Document from "./subForms/Document";
import patientFromStyle from "./patientForm.module.scss";

const PatientForm = () => {

  const { step } = useSelector((state) => state.patientForm);

  return (
    <div className={patientFromStyle.patientFormSection}>
      <div className={patientFromStyle.formStepper}>
        <div className="stepWrapper">
          
        </div>
      </div>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <FamilyInfo />}
      {step === 3 && <DiseaseInfo />}
      {step === 4 && <Document />}
    </div>
  );
};

export default PatientForm;
