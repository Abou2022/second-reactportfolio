import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImgProjects from "../components/projects/HeroImgProjects";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgProjects heading="CONTACT ME" text="Let have a chat" />
      <Footer />
    </div>
  );
};

export default Contact;
