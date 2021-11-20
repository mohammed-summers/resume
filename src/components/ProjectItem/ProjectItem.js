import "./projectitem.css";

import React from "react";

const ProjectItem = ({ img, link, desc, title, code }) => {
  return (
    <div className="project-item">
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>

      <div className="project-container">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <img src={img} alt={title} className="project-img" />
        </a>

        <p className="project-item-title">{title}</p>
        <p className="project-item-desc">{desc}</p>

        <div className="project-links">
          <a href={code} target="_blank" rel="noreferrer" className="link">
            code
          </a>
          <a href={link} target="_blank" rel="noreferrer" className="link">
            source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
