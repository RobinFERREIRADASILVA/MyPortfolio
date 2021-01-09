import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Project from 'src/components/Project';

import { getProjectById } from 'src/utils/selector';

import './projects.scss';

const Projects = ({ projects }) => {
  const { id } = useParams();
  const project = getProjectById(id, projects);

  return (
    <div
      className="projects"
    >
      <Project
        {...project}
        key={project.id}
      />
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
