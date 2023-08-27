import "../projectCard/MyProjectStyles.css";

import React from "react";

const MyProjects = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="lost pet" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} target="_blank" className="btn">
            Page
          </a>
          <a href={props.source} target="_blank" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
