import ButtonStyles from "./button.module.scss";

const Button = (children, className, buttonClassName , type="button") => {
  return (
    <div className={`${ButtonStyles.customButton}${className} `}>
      <button type={type} className={buttonClassName}>{children}</button>
    </div>
  );
};

export default Button;
