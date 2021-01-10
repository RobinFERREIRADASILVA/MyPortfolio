import React from 'react';
import { motion } from 'framer-motion';

import './home.scss';

const Home = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.7 },
      x: '+100vw',
    },
    in: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.7 },
      x: '-100vw',
    },
  };

  // const transition = {
  //   transition: 'easeOut',
  // };

  return (
    <motion.div
      key="home"
      className="home"
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      <div className="home-content">
        <h1 className="home-title"><span className="home-hello">Bonjour </span>Je suis Robin Ferreira Da Silva</h1>
        <p>Je suis <strong>Developpeur Web </strong>
          adepte des technologies: <br /> HTML/CSS, Saas, React/Redux, Javascript, Php
        </p>
        <p>Dev Junior for life is the key</p>
      </div>
    </motion.div>
  );
};

export default Home;
