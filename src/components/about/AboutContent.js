import "../about/AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I am?</h1>
        <p>
          Full-stack developer with a background in Computer Science,
          specializing in the MERN stack, I create reponsive secure websites.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
