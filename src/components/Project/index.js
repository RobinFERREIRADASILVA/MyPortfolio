import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Project = ({ name, date, description, teamDev, technos, picture }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.7 },
      x: '70vw',
    },
    in: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: '-50vw',
    },
  };

  return (
    <motion.div
      className="project-container"
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      key={name}
    >
      <div className="project-description">
        <h2 className="project-title">{name}</h2>
        <p className="project-date">{date}</p>
        <p className="project-content">{description}</p>
        <p className="project-team">{teamDev}</p>
        <p className="project-techno">{technos}</p>
      </div>
      <div className="project-image">
        <img src={picture} alt="Projects" />
        <button type="button">voir le site</button>
      </div>
    </motion.div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamDev: PropTypes.string.isRequired,
  technos: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Project;
