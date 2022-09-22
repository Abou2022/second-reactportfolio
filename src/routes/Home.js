// short cut "rafce" for export function

import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroImg from "../components/home/HeroImg";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />

      <Footer />
    </div>
  );
};

export default Home;
