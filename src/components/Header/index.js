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
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "../NavItem/index";
const Header = () => {
  const bodyClass = document.body.classList;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = (e) => {
    e.preventDefault();
    if (isDarkMode) {
      bodyClass.replace("light", "dark");
    } else if (!isDarkMode) {
      bodyClass.replace("dark", "light");
    }
  };
  return (
    <header>
      <nav>
        <NavLink activeClassName="active-nav-link" to="/">
          <h1 id="logo">David Tudor John</h1>
        </NavLink>
        <form id="header-search-form">
          <input type="text" id="header-search-input" />
          <button id="header-search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <ul id="nav-list">
          <NavItem path="/portfolio" label="Portfolio" icon={faFileAlt} />
          <NavItem path="/blog" label="Blog" icon={faCoffee} />
          <NavItem path="/login" label="Login" icon={faSignInAlt} />
        </ul>
      </nav>
      <div
        id="theme-btn-bg"
        onClick={(e) => {
          setIsDarkMode(!isDarkMode);
          e.preventDefault();
          toggleDarkMode(e);
        }}
      >
        <FontAwesomeIcon id="theme-btn" icon={isDarkMode ? faSun : faMoon} />
      </div>
    </header>
  );
};

export default Header;
