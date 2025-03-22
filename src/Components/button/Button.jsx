import React from "react";
import styles from "./button.module.scss";

const Button = (children, className, buttonClassName) => {
  return (
    <div className={className}>
      <button className={buttonClassName}>{children}</button>
    </div>
  );
};

export default Button;
