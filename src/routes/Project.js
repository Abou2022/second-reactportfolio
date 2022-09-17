import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeoImgProjects from "../components/projects/HeoImgProjects";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeoImgProjects heading="PROJECTS." text="Some of my recent works" />
      <Footer />
    </div>
  );
};

export default Project;
