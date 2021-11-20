import "./projectlist.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { products } from "../../data";

import React from "react";

const ProjectList = () => {
  return (
    <div className="projects">
      <div className="project-text">
        <h1 className="project-title">Projects</h1>
        <p className="project-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae natus
          perspiciatis voluptatibus impedit, numquam labore, illo praesentium
          sint ipsa ad, velit recusandae. Hic temporibus, blanditiis quis
          reiciendis praesentium nisi quia.
        </p>
      </div>

      <div className="project-list">
        {products.map((item) => (
          <ProjectItem
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
            desc={item.desc}
            code={item.code}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
