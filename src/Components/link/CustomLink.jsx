import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ children, to, className }) => {
  return (
    <Link className={`border-[0.2rem] rounded-4xl ${className}`} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
