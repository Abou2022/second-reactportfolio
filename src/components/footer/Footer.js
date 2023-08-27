import "../footer/FooterStyles.css";

import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kent, Washington</p>
              <p>United States</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1 (253) 263 - 9001
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:syllabakary2002@gmail.com">
                syllabakary2002@gmail.com
              </a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            Full-stack software engineer. Fully Work Authorized • No Visa
            Sponsorship Required • Open to Relocation{" "}
          </p>
          <div className="social">
            <a href="https://github.com/Abou2022" target="_blanc">
              {" "}
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="http://www.linkedin.com/in/bakary-sylla" target="_blanc">
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
