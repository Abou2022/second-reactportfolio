import "../projectCard/MyProjectStyles.css";

import React from "react";

import project1 from "../assets/PetFinder.png";
import { NavLink } from "react-router-dom";

const MyProjects = () => {
  return (
    <div className="project-card">
      <img src={project1} alt="lost pet" />
      <h2 className="project-title">Pet Finder</h2>
      <div className="pro-details">
        <p>
          Team project to help people to report or found their pet. Techniques
          used: HTML5, CSS3, JavaScript, Bootstrap, Express-handlebars, MySQL2,
          Sequelize, dotenv, Node.js, cloudinary, bcrypt, express-session,
          connect-session-sequelize
        </p>
        <div className="pro-btns">
          <NavLink
            to="https://hidden-shore-04969.herokuapp.com/home"
            className="btn"
          >
            Page
          </NavLink>
          <NavLink
            to="https://github.com/Abou2022/Lost-Pet-Project"
            className="btn"
          >
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
