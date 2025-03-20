import React from "react";
import PropTypes from "prop-types";
import { NavbarModuleCss } from "../index";

const Navbar = ({ children }) => {
  return (
    <div className={NavbarModuleCss.navbarContainer}>
      <nav>
        <div className={NavbarModuleCss.logo}>Horizon</div>
        {children}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
