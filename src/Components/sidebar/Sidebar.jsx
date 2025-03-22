import React from "react";
import PropTypes from "prop-types";
import sidebarModuleCss from "../sidebar/sidebarStyle.module.scss";

const  Sidebar = ({ className }) => {
  return (
    <div className={`${sidebarModuleCss.sidebarContainer} ${className}`}>
      this is the sidebar
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
