import React from 'react';
import { Link } from 'react-router-dom';

import './scrollbutton.scss';

const ScrollButton = ({ right, left }) => (
  <div className="scroll-button">
    {left !== undefined && (
      <Link to={left} className="left"><i className="fas fa-chevron-left arrow" /></Link>
    )}
    <p>
      Scrollez !
    </p>
    {right !== undefined && (
      <Link to={right} className="right"><i className="fas fa-chevron-right arrow" /></Link>
    )}
  </div>
);

export default ScrollButton;
