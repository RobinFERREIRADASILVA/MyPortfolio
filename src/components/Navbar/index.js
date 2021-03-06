import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './navbar.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  const [openProjects, setOpenProjects] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleOpenProjects = () => {
    setOpenProjects(!openProjects);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <header className="header">
      <nav className="header-nav">
        {(largeur > 500) && (
          <ul className="navbar-list">
            <li className="navbar-item"><NavLink exact to="/">Home</NavLink></li>
            <li className="navbar-projet">Projets
              <ul className="navbar-projects">
                <NavLink className="navbar-projects" exact to="/project-1"><li>Projet 1</li></NavLink>
                <NavLink className="navbar-projects" exact to="/project-2"><li>Projet 2</li></NavLink>
                <NavLink className="navbar-projects" exact to="/project-3"><li>Projet 3</li></NavLink>
              </ul>
            </li>
            <li className="navbar-item"><NavLink exact to="/about">About</NavLink></li>
            <li className="navbar-item"><NavLink exact to="/contact">Contact</NavLink></li>
          </ul>
        )}
        {(openMenu && largeur < 500) && (
          <ul className="navbar-list">
            <li className="navbar-item"><NavLink exact to="/">Home</NavLink></li>
            <li className="navbar-projet"><span className="projects" onClick={handleOpenProjects}>Projets</span>
              <ul className={classNames('navbar-projects', {'projects--open' : openProjects})}>
                <NavLink className="navbar-projects" exact to="/project-1"><li>Projet 1</li></NavLink>
                <NavLink className="navbar-projects" exact to="/project-2"><li>Projet 2</li></NavLink>
                <NavLink className="navbar-projects" exact to="/project-3"><li>Projet 3</li></NavLink>
              </ul>
            </li>
            <li className="navbar-item"><NavLink exact to="/about">About</NavLink></li>
            <li className="navbar-item"><NavLink exact to="/contact">Contact</NavLink></li>
          </ul>
        )}
        <i className="fas fa-bars navbar-button" onClick={handleOpenMenu} />
      </nav>
    </header>
  );
};

export default Navbar;
