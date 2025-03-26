import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import checkboxStyle from "./checkBox.module.scss";

const CustomCheckbox = ({ id, label, checked, onChange, className, error }) => {
  return (
    <div className={clsx(checkboxStyle.checkboxContainer, className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={checkboxStyle.checkboxInput}
      />
      <label htmlFor={id} className={checkboxStyle.checkboxLabel}>
        <span className={checkboxStyle.customCheckbox}></span>
        {label}
      </label>
      {error && <span className={checkboxStyle.checkboxError}>{error}</span>}
    </div>
  );
};

CustomCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes,
  error: PropTypes.string,
};

export default CustomCheckbox;
