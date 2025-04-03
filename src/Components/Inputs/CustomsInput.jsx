import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import PropTypes from "prop-types";
import inputStyle from "../Inputs/CustomInput.module.scss";

const CustomsInput = ({
  step,
  onChange,
  name,
  inputMainCLassName,
  className,
  id,
  type,
  icon,
  placeholder,
  register,
  errors,
  inputName,
  validation,
  minLength,
  maxLength,
  mainContainer,
  acceptingTypes,
}) => {
  return (
    <div className={`${inputStyle.InputMainContainer} ${mainContainer}`}>
      {errors?.[inputName] && (
        <span className={inputStyle.inputError}>
          {errors?.[inputName].message}
        </span>
      )}
      <div className={clsx(inputStyle.inputContainer, inputMainCLassName)}>
        {icon && (
          <label htmlFor={id} className={inputStyle.inputSymbol}>
            <FontAwesomeIcon icon={icon} />
          </label>
        )}
        <input
          type={type}
          id={id}
          name={name}
          step={step}
          className={`${className}`}
          placeholder={placeholder}
          {...(register ? register(inputName, validation) : {})}
          onChange={onChange}
          min={minLength}
          max={maxLength}
          accept={acceptingTypes}
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
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mainContainer: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default CustomsInput;
