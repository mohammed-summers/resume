import "./about.css";
import Me from "../../img/mk4.jpeg";

import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        {/* <div className="about-card bg"></div> */}
        <div className="about-card">
          <img src={Me} alt="mohammed" className="about-img" />
        </div>
      </div>

      <div className="about-right">
        <div className="about-right-container">
          <div className="about-right-desc">
            <h1 className="about-title">About Me</h1>

            <p className="about-sub">Aspiring Frontend Developer</p>
            <div className="about-exp">
              <li>
                Experience in modern front-end development (HTML5, CSS3,
                JavaScript ES6 & React)
              </li>
              <li>
                Developing single based applications using React Hooks, React
                Router
              </li>
              <li>
                Creating responsive and user-friendly applications across
                Desktop, Tablet & mobile devices
              </li>
              <li>
                Experience with pulling relevant JSON data from 3rd party API’s
                end points
              </li>

              <li>
                Producing static websites and landing pages using HTML & CSS
                frameworks such as Bootstrap
              </li>
            </div>
          </div>

          <div className="skills">
            <p className="skills-p">Skills</p>
            <div className="icons">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-js-square"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-bootstrap"></i>
              <i className="fab fa-git"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
