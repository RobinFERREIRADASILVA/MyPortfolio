// == Import npm
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Projet from 'src/pages/Projet';
import NotFound from 'src/pages/NotFound';
import Navbar from 'src/components/Navbar';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [firstState, setFirstState] = useState('');

  return (
    <div className="app">
      <Router>
        <Navbar />
        <a>test savoir si bootstrap est un fdp</a>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projet">
            <Projet />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
);
}


// == Export
export default App;
