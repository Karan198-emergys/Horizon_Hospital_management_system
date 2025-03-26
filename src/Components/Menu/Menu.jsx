import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import menuModuleCss from "./menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ children, icon, className, to }) => {
  const location = useLocation();

  return (
    <div className={`${menuModuleCss.menuContainer} ${className}`}>
      <NavLink to={to} className={menuModuleCss.menuLink}>
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        {children}
      </NavLink>
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  to: PropTypes.string,
};

export default Menu;

{
  /* import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ items }) => {
  return (
    <nav className="menu">
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.icon && <span className="menu-icon">{item.icon}</span>}
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
 */
}
