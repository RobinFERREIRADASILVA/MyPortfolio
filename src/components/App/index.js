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
import Navbar from 'src/components/Navbar';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const backgroundStyle = {
    backgroundImage: 'url( https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg )',
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
          <Route exact path="/projects">
            <Projects />
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
