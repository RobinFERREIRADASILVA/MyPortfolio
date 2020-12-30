import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ name, date, description, teamDev, technos, picture }) => (
  <div className="project-container">
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
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamDev: PropTypes.string.isRequired,
  technos: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Project;
