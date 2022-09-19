import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImgProjects from "../components/heroProjects/HeroImgProjects";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImgProjects heading="PROJECTS." text="Some of my recent works" />
      <Footer />
    </div>
  );
};

export default Project;
