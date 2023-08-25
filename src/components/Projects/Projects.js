import React from "react";
import "./Projects.css";
import ProjectData from "./ProjectData";
import ProjectCards from "./ProjectCards";
const Projects = () => {
  return (
    <div>
      <h1 className="project_heading">Projects</h1>
      <div>
        <ProjectCards details={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;
