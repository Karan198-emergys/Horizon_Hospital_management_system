import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import PropTypes from "prop-types";
import inputStyle from "../Inputs/CustomInput.module.scss";

const CustomsInput = ({
  inputMainCLassName,
  className,
  id,
  type,
  icon,
  placeholder,
  register,
  errors,
  inputName,
  validation
}) => {
  return (
    <div>
        {
          errors?.[inputName] && (
            <span className={inputStyle.inputError}>
              {errors?.[inputName].message}
            </span>
          ) 
        }
      <div className={clsx(inputStyle.inputContainer, inputMainCLassName)}>
        {icon && (
          <label htmlFor={id} className={inputStyle.inputSymbol}>
            <FontAwesomeIcon icon={icon} />
          </label>
        )}
        <input
          type={type}
          id={id}
          className={`${className}`}
          placeholder={placeholder}
          {...( register ? register(inputName , validation): {})}
        />
      </div>
    </div>
  );
};

CustomsInput.propTypes = {
  inputMainCLassName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object,
  inputName: PropTypes.string.isRequired,
  validation: PropTypes.object,
};

export default CustomsInput;
