import "../projectCard/MyProjectStyles.css";

import React from "react";

import project1 from "../assets/PetFinder.png";
import { NavLink } from "react-router-dom";

const MyProjects = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="lost pet" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            Page
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
