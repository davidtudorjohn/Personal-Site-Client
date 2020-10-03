import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSignInAlt,
  faBook,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 id="logo">David Tudor John</h1>
      </Link>
      <nav>
        <ul id="nav-list">
          <li className="nav-item">
            <Link to="/portfolio">
              <FontAwesomeIcon className="fa-icon" icon={faFileAlt} /> Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog">
              <FontAwesomeIcon className="fa-icon" icon={faCoffee} /> Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login">
              <FontAwesomeIcon className="fa-icon" icon={faSignInAlt} /> Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
