import React from 'react';

import dataProject from 'src/data/project';
import Project from 'src/components/Project';

import './projects.scss';

const Projects = () => (
  <div className="projects">
    { dataProject.map((project) => (
      <Project
        {...project}
      />
    )) }
  </div>
);

export default Projects;
