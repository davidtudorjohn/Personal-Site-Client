import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 id="logo">David Tudor John</h1>
      </Link>
      <nav>
        <ul id="nav-list">
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
