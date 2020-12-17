// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from 'src/pages/Home';

// == Import
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  </div>
);

// == Export
export default App;
