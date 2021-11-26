import React, { useState } from "react";
import { Link } from "react-scroll";

import "./navbar2.css";

const Navbar2 = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  return (
    <nav className="navbar2">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link
            className="logo-link"
            to="home"
            spy={true}
            smooth={true}
            offset={-160}
            duration={500}
          >
            <i className="fas fa-code"></i> Portfolio
          </Link>
        </div>

        <div className="links-container">
          <Link
            className="nav-links"
            to="home"
            spy={true}
            smooth={true}
            offset={-160}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="nav-links"
            to="about"
            spy={true}
            smooth={true}
            offset={-140}
            duration={500}
          >
            About
          </Link>
          <Link
            className="nav-links"
            to="projects"
            spy={true}
            smooth={true}
            offset={-140}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="nav-links"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </div>

        <div className="menu-btn" onClick={clickHandler}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
