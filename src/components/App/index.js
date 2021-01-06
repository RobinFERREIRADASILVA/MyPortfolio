// == Import npm
import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
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

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const handleScrollToElement = (event) => {
      const url = `${window.location.origin}/`;

      const wheelRouter = (after, before) => {
        if (event.wheelDeltaY < 0)
        {
          history.push(after);
        }
        else if (event.wheelDeltaY > 0) {
          history.push(before);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (event.wheelDelta < 0) {
            history.push('project-1');
          }
          break;
        case `${url}project-1`:
          wheelRouter('project-2', '');
          break;
        case `${url}project-2`:
          wheelRouter('project-3', 'project-1');
          break;
        case `${url}project-3`:
          wheelRouter('contact', 'project-2');
          break;
        case `${url}contact`:
          if (event.wheelDelta > 0) {
            history.push('project-3');
          }
          break;
        default:
          console.log('nothing');
      }
    };

    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <div className="app" style={backgroundStyle}>
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/project-:id">
          <Projects projects={dataProject} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};


// == Export
export default App;
