import React from "react";
import "./mobilenavitem.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  icon: any;
  label: string;
  path: string;
  description: string;
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
        <button className="mobile-nav-item-left">
          <FontAwesomeIcon className="fa-icon" icon={props.icon} />
        </button>
        <section className="mobile-nav-item-right">
          <h3>{props.label}</h3>
          <p>{props.description}</p>
        </section>
      </NavLink>
    </li>
  );
};
export default MobileNavItem;
