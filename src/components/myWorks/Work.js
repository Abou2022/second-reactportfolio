import "../projectCard/MyProjectStyles.css";
import MyProjects from "../projectCard/MyProjects";
import WorkCardData from "../myWorks/WorkCardData";

import React from "react";

// import project1 from "../assets/Pet Finder.png";
// import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="pro-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <MyProjects
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
