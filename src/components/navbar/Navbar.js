import "../navbar/NavbarStyles.css";

//import useState when used
import React, { useState } from "react";
import { Link } from "react-router-dom";

// to add icons I will import first
// I have to precise what categorie of icons I added "fa"
import { FaBars, FaTimes } from "react-icons/fa";

import myResume from "../../assets/BAKARY-SYLLA.pdf";

const Navbar = () => {
  // I will use useState to change icons hamberger state
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Bakary Sylla</h1>
      </Link>
      {/* Create a class to style the navbar */}
      {/* add if condition to display menu when you click on burguer icons  */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href={myResume} download>
            Resume
          </a>
        </li>
      </ul>
      {/* Add icons bambuger bar */}
      {/* hide the icons until we change the screen  */}
      <div className="hamburger" onClick={handleClick}>
        {/* added statement to avoid diplay both icons in the same time suit case */}
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
