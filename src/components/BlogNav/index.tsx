import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag";
import "./blognav.css";

const BlogNav = () => {
  return (
    <section id="blog-nav">
      <h3>Filter</h3>
      <section className="blog-nav-item">
        <label>Category</label>
        <select>
          <option>JavaScript</option>
          <option>ReactJS</option>
        </select>
      </section>
    </section>
  );
};
export default BlogNav;
