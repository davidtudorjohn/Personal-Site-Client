import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  icon: any;
  label: string;
  path: string;
}
const NavItem = (props: Props) => {
  return (
    <li className="nav-item">
      <NavLink activeClassName="active-nav-link" to={`${props.path}`}>
        <FontAwesomeIcon className="fa-icon" icon={props.icon} /> {props.label}
      </NavLink>
    </li>
  );
};
export default NavItem;
