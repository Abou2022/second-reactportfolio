import "../home/HeroImgStyles.css";

import React from "react";

//to add img I import image
// import MyImg from "../assets/Bak1.jpg";
import MyImg from "../../assets/Bak1.jpg";

//import link when I used
import { Link } from "react-router-dom";
//About homepage
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={MyImg} alt="MyImg" />
      </div>
      <div className="content">
        <p>
          Hello, I AM <strong> Bakary Sylla</strong>{" "}
        </p>
        <h1>FULL STACK DEVELOPPER</h1>
        <div>
          {/* I will use link because I want to make my btn clickable  */}
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
