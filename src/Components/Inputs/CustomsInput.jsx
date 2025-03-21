import React from "react";
import PropTypes from "prop-types";
import inputStyle from "../Inputs/CustomInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

const CustomsInput = ({
  inputMainCLassName,
  className,
  id,
  type,
  icon,
  placeholder,
}) => {
  return (
    <div className={` ${inputStyle.inputContainer} ${inputMainCLassName}`}>
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
      />
    </div>
  );
};

CustomsInput.propTypes = {
  inputMainCLassName: PropTypes.node,
  className: PropTypes.node,
  id: PropTypes.node,
  type: PropTypes.node,
  icon: PropTypes.node,
  placeholder: PropTypes.node,
};

export default CustomsInput;
