import React from 'react';
import { motion } from 'framer-motion';

import './contact.scss';

const Contact = () => {
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
  return (
    <motion.div
      className="contact"
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
    >
      <div className="contact-container">
        <h2>N'hésitez pas à me contacter !</h2>
        <p><i className="fas fa-phone-alt" /> 0666900712</p>
        <p><i className="fas fa-envelope" /> ferreiradasilvarobin@gmail.com</p>
        <p><a href="https://github.com/RobinFERREIRADASILVA" target="blank"> <i className="fab fa-github" />RobinFERREIRADASILVA</a></p>
        <p><a href="https://www.linkedin.com/in/robin-ferreira-da-silva-438130203/" target="blank" ><i className="fab fa-linkedin" />Robin FERREIRA DA SILVA</a> </p>
      </div>
    </motion.div>
  );
};

export default Contact;
