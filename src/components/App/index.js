// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Projects from 'src/pages/Projects';
import NotFound from 'src/pages/NotFound';
import Contact from 'src/pages/Contact';
import Navbar from 'src/components/Navbar';

// == Import
import './styles.scss';
import background from 'src/assets/images/backgroundImage.jpg';

import dataProject from 'src/data/project';

// == Composant
const App = () => {
  const backgroundStyle = {
    backgroundImage: `url( ${background} )`,
  };

  return (
    <div className="app" style={backgroundStyle}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/project/:id">
            <Projects projects={dataProject} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};


// == Export
export default App;
