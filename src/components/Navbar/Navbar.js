import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MK
          </Link>

          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                // onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                // onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                // onClick={closeMobileMenu}
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
