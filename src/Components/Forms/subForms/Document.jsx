import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "src/Components";
import { backStep } from "src/redux/Slices/FormSlice/FormSlice";
import styles from "./document.module.scss";


const Document = ({}) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/user")
    localStorage.setItem("step" , 1)
  };

  const handleBack = () => {
    dispatch(backStep());
  };

  return( <form>
    <h2>Document</h2>
    <div className={styles.documentButton}>
          <Button onclickFunction={handleBack}>Go back</Button>
          <Button onclickFunction={handleSubmit}>Submit</Button>
      </div>
    </form>);
};
Document.propTypes = {

}

export default Document
