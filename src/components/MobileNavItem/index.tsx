import React from "react";
import "./mobilenavitem.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  icon: any;
  label: string;
  path: string;
  click?: any;
}
const MobileNavItem = (props: Props) => {
  return (
    <li className="mobile-nav-item" onClick={props.click}>
      <NavLink
        className="mobile-nav-item-content"
        activeClassName="active-nav-link"
        to={`${props.path}`}
      >
        <section className="mobile-nav-item-left">
          <FontAwesomeIcon className="fa-icon" icon={props.icon} />
        </section>
        <section className="mobile-nav-item-right">
          <h3>{props.label}</h3>
          <p>Some description about where the menu item will take you.</p>
        </section>
      </NavLink>
    </li>
  );
};
export default MobileNavItem;
