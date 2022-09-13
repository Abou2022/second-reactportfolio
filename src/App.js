//import React
//This is a parent page we need to call all file inside here
import React from "react";
import "./index.css";
//to call each child : import <child name> from "<location folder and file>"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    //Before we added Routes we need <></> then insite our Routes
    <>
      <Routes>
        {/* for each route we need a path */}
        {/* For the home page the path gonna be / it considere our first element */}
        <Route path="/" element={<Home />} />
        {/* For the Project page the path gonna be /Project it considere our first element */}
        <Route path="/project" element={<Project />} />
        {/* For the About page the path gonna be /About it considere our first element */}
        <Route path="/about" element={<About />} />
        {/* For the home page the path gonna be / it considere our first element */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
