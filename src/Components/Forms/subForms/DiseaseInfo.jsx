import { useDispatch } from "react-redux";
import { Button } from "src/Components";
import { backStep, nextStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "./diseaseInfo.module.scss";


const DiseaseInfo = ({}) => {

  const dispatch = useDispatch()

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(backStep());
  };

  return( <form>
    <h2>disease</h2>
    <div className={styles.diseaseButton}>
          <Button onclickFunction={handleBack}>Go back</Button>
          <Button onclickFunction={handleNext}>Next</Button>
      </div>
    </form>);
};

DiseaseInfo.propTypes = {};

export default DiseaseInfo;
