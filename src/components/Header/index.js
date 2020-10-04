import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSignInAlt,
  faBook,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "../NavItem/index";
const Header = () => {
  return (
    <header>
      <NavLink activeClassName="active-nav-link" to="/">
        <h1 id="logo">David Tudor John</h1>
      </NavLink>
      <nav>
        <ul id="nav-list">
          <NavItem path="/portfolio" label="Portfolio" icon={faFileAlt} />
          <NavItem path="/blog" label="Blog" icon={faCoffee} />
          <NavItem path="/login" label="Login" icon={faSignInAlt} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
