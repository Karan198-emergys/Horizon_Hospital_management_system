import React from "react";
import PropTypes from "prop-types";
import NavbarModuleCss from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

const Navbar = ({ children }) => {
  const toNavigate = useNavigate();

  // Add more navigation items as needed
  return (
    <div className={NavbarModuleCss.navbarContainer}>
      <nav>
        <div className={NavbarModuleCss.logo} >
          Horizon
        </div>
        {children}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
