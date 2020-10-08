import React, { useEffect, useState } from "react";
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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "../NavItem/index";
import MobileNavItem from "../MobileNavItem";
import HeaderSearchForm from "../HeaderSearchForm";
const Header = () => {
  const bodyClass = document.body.classList;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    let darkModePref = localStorage.getItem("isDarkMode");
    console.log("dark mode pref:" + darkModePref);
    if (darkModePref === true) {
      // bodyClass.replace("light", "dark");

      setIsDarkMode(true);
    }
  }, []);
  const toggleDarkMode = () => {
    if (isDarkMode) {
      bodyClass.replace("light", "dark");
      localStorage.setItem("isDarkMode", true);
    } else if (!isDarkMode) {
      bodyClass.replace("dark", "light");
      localStorage.setItem("isDarkMode", false);
    }
  };
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <NavLink
          activeClassName="active-nav-link"
          to="/"
          onClick={handleMobileMenuClick}
        >
          <h1 id="logo">David Tudor John</h1>
        </NavLink>
        {/* <form id="header-search-form">
          <input type="text" id="header-search-input" />
          <button id="header-search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form> */}
        <HeaderSearchForm icon={<FontAwesomeIcon icon={faSearch} />} />
        <ul id="nav-list">
          <NavItem path="/courses" label="Courses" icon={faFileAlt} />
          <NavItem path="/blog" label="Blog" icon={faCoffee} />
          <NavItem path="/login" label="Login" icon={faSignInAlt} />
        </ul>
      </nav>
      <section id="header-btn-section">
        <button
          id="theme-btn"
          onClick={(e) => {
            setIsDarkMode(!isDarkMode);
            e.preventDefault();
            toggleDarkMode(e);
          }}
        >
          <FontAwesomeIcon
            id="theme-btn-icon"
            icon={isDarkMode ? faSun : faMoon}
          />
        </button>
        <button
          id="mobile-menu-btn"
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <FontAwesomeIcon id="mobile-menu-btn-icon" icon={faBars} />
        </button>
      </section>
      {isMobileMenuOpen && (
        <section id="mobile-menu-content">
          <ul id="mobile-nav-list">
            <MobileNavItem
              path="/courses"
              label="Courses"
              description="Check out some really awesome courses to learn state-of-the-art technologies!"
              icon={faFileAlt}
              click={handleMobileMenuClick}
            />
            <MobileNavItem
              path="/blog"
              label="Blog"
              description="Read some world-class content about startups, technology, innovation, and more!"
              icon={faCoffee}
              click={handleMobileMenuClick}
            />
            <MobileNavItem
              path="/login"
              label="Login"
              description="Login to access exclusive content for members only!"
              icon={faSignInAlt}
              click={handleMobileMenuClick}
            />
          </ul>
        </section>
      )}
    </header>
  );
};

export default Header;
