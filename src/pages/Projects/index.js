import React from 'react';
import PropTypes from 'prop-types';

import Project from 'src/components/Project';

import './projects.scss';

const Projects = ({ projects }) => (
  <div className="projects">
    <Project
      {...project}
    />
  </div>
);

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
