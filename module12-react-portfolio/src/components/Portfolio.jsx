// src/components/Portfolio.jsx

import React from "react";
import Project from "./Project";
import dartImg from "../assets/dart.png";

const projects = [
  {
    title: "Project One - Dart Frog",
    image: dartImg,
    repoUrl: "https://github.com/username/project-one",
  },
  {
    title: "Project Two - Dart Frog",
    image: dartImg,
    repoUrl: "https://github.com/username/project-two",
  },
  {
    title: "Project Three - Dart Frog",
    image: dartImg,
    repoUrl: "https://github.com/username/project-three",
  },
  {
    title: "Project Four - Dart Frog",
    image: dartImg,
    repoUrl: "https://github.com/username/project-four",
  },
  {
    title: "Project Five - Dart Frog",
    image: dartImg,
    repoUrl: "https://github.com/username/project-five",
  },
  {
    title: "Project Six - Dart Frog",
    image: dartImg,
    repoUrl: "https://github.com/username/project-six",
  },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
