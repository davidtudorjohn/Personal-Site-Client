import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSignInAlt,
  faMoon,
  faFileAlt,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "../NavItem/index";
const Header = () => {
  const bodyClass = document.body.classList;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (isDarkMode) {
      bodyClass.replace("light", "dark");
    } else {
      bodyClass.replace("dark", "light");
    }
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header>
      <nav>
        <NavLink activeClassName="active-nav-link" to="/">
          <h1 id="logo">David Tudor John</h1>
        </NavLink>
        <ul id="nav-list">
          <NavItem path="/portfolio" label="Portfolio" icon={faFileAlt} />
          <NavItem path="/blog" label="Blog" icon={faCoffee} />
          <NavItem path="/login" label="Login" icon={faSignInAlt} />
        </ul>
      </nav>
      <FontAwesomeIcon
        id="theme-btn"
        onClick={(e) => {
          e.preventDefault();
          toggleDarkMode();
        }}
        icon={isDarkMode ? faSun : faMoon}
      />
    </header>
  );
};

export default Header;
