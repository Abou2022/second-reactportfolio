import "./NavbarStyles.css";

import React from "react";
import { Link } from "react-router-dom";

// to add icons I will import first
// I have to precise what categorie of icons I added "fa"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>MyPortfolio</h1>
      </Link>
      {/* Create a class to style the navbar */}
      <ul className="nav-menu">
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
      </ul>
      {/* Add icons bambuger bar */}
      <div className="hamburger">
        <FaBars size={20} style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Navbar;
