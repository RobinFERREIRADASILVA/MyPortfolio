import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
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
        {(openMenu || largeur > 500) && (
          <ul className="navbar-list">
            <li className="navbar-item"><NavLink exact to="/">Home</NavLink></li>
            <li className="navbar-item"><NavLink exact to="/projects">Projets</NavLink></li>
            <li className="navbar-item"><NavLink exact to="/about">About</NavLink></li>
          </ul>
        )}
        <i className="fas fa-bars navbar-button" onClick={handleOpenMenu} />


      </nav>
    </header>
  );
};

export default Navbar;
