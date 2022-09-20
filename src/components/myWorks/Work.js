import "../projectCard/MyProjectStyles.css";

import React from "react";

import project1 from "../assets/Pet Finder.png";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="pro-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container"></div>
    </div>
  );
};

export default Work;
