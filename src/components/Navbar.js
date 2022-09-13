// import "./NavbarStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>MyPortfolio</h1>
      </Link>
      <ul>
        <li>
          <Link></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
