import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImgProjects from "../components/heroProjects/HeroImgProjects";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgProjects
        heading="ABOUT ME"
        text="I am a friendly Font-End and Back-End Developper"
      />
      <Footer />
    </div>
  );
};

export default About;
