import React from "react";
import PropTypes, { node } from "prop-types";

const CustomsInput = ({
  inputMainCLassName,
  className,
  id,
  type,
  FontAwesomeIcon,
  placeholder,
}) => {
  return (
    <div
      className={`${inputMainCLassName} flex items-center gap-2  border-2 border-teal-600 rounded-lg`}
    >
      <label htmlFor={id} className="text-3xl pl-2 text-teal-600">
        {FontAwesomeIcon}
      </label>
      <input
        type={type}
        id={id}
        className={`text-xl outline-none placeholder:text-gray-400 ${className}`}
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
  FontAwesomeIcon: PropTypes.node,
  placeholder: PropTypes.node,
};

export default CustomsInput;
