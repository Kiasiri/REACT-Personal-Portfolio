import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="container">
      <div id="projects" className="container">
        <div className="">
          {projects.map((project) => (
            <a href={project.deployed} className="">
              <div className="">
                <div className="">
                  <h1 className="">{project.title}</h1>
                  <p className="">{project.description}</p>
                  <a className="" href={project.github}>
                    Github
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
