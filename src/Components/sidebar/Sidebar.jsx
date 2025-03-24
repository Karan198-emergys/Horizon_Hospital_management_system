import React from "react";
import PropTypes from "prop-types";
import sidebarModuleCss from "../sidebar/sidebarStyle.module.scss";

const Sidebar = ({ className, children }) => {
  return (
    <div className={`${sidebarModuleCss.sidebarContainer} ${className}`}>
      {children}
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
