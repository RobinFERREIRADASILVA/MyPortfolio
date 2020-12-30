import React from 'react';

import './projet.scss';

const Projet = () => (
  <div className="projet">
    <div className="project-container">
      <div className="project-description">
        <h2 className="project-title">Cyclobster Photographie</h2>
        <p className="project-date">Décembre 2020</p>
        <p className="project-content">Site vitrine pour photographe, exposant ses clichés, et sa philosophie autour de la photo. <br/>
          Projet mené seul from scratch
        </p>
        <p className="project-techno">HTML/CSS, PHP, JS</p>
      </div>
      <div className="project-image">
        <img src="https://www.laguilde.quebec/wp-content/uploads/2020/05/logo-placeholder.jpg" alt="projet" />
        <button type="button">voir le site</button>
      </div>
    </div>
  </div>
);

export default Projet;
