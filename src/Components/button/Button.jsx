import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.module.scss";

const Button = ({ children, className = "", buttonClassName = "", type = "button" }) => {
  return (
    <button type={type} className={`${ButtonStyles.customButton} ${buttonClassName} ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  type: PropTypes.string
};

export default Button;
