import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

ScrollButton.propTypes = {
  right: PropTypes.string,
  left: PropTypes.string,
};

ScrollButton.defaultProps = {
  right: undefined,
  left: undefined,
};
export default ScrollButton;
