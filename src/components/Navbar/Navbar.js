import React, { useState } from "react";

import { Link } from "react-scroll";

import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container ">
          <Link
            className="nav-links"
            onClick={closeMobileMenu}
            to="home"
            spy={true}
            smooth={true}
            offset={-160}
            duration={500}
          >
            <i className="fas fa-code"></i> Portfolio
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-links nav-links-mobile"
                onClick={closeMobileMenu}
                to="home"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-links nav-links-mobile"
                onClick={closeMobileMenu}
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-links nav-links-mobile"
                onClick={closeMobileMenu}
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-links nav-links-mobile"
                onClick={closeMobileMenu}
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
