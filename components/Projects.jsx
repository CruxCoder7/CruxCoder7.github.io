import React from "react";
import ProjectItem from "./ProjectItem";
import webImg from "../public/assets/projects/website.jpg";
import ABS from "../public/assets/projects/ABS.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full dark:bg-[#121212]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 dark:text-[#717a7a]">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Notes-Blog App"
            backgroundImg={ABS}
            projectUrl="/notesblog"
          />
          <ProjectItem
            title="SSN Coding Club"
            backgroundImg={webImg}
            projectUrl="/ssncc"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
