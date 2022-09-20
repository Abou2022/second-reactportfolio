import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImgProjects from "../components/heroProjects/HeroImgProjects";
import MyProjects from "../components/projectCard/MyProjects";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImgProjects heading="PROJECTS." text="Some of my recent works" />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Project;
