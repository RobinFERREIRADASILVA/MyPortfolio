// == Import npm
import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from 'src/pages/Home';
import About from 'src/pages/About';
import { Project1, Project2, Project3 } from 'src/pages/Projects';
import NotFound from 'src/pages/NotFound';
import Contact from 'src/pages/Contact';
import Navbar from 'src/components/Navbar';
import background from 'src/assets/images/backgroundImage.jpg';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const handleScrollToElement = (event) => {
      const url = `${window.location.origin}/`;

      const wheelRouter = (after, before) => {
        if (event.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 350);
        }
        else if (event.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 350);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (event.wheelDelta < 0) {
            setTimeout(() => {
              history.push('project-1');
            }, 350);
          }
          break;
        case `${url}project-1`:
          wheelRouter('project-2', '');
          break;
        case `${url}project-2`:
          wheelRouter('project-3', 'project-1');
          break;
        case `${url}project-3`:
          wheelRouter('about', 'project-2');
          break;
        case `${url}about`:
          wheelRouter('contact', 'project-3');
          break;
        case `${url}contact`:
          if (event.wheelDelta > 0) {
            setTimeout(() => {
              history.push('about');
            }, 350);
          }
          break;
        default:
          console.log('nothing');
      }
    };

    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  const backgroundStyle = {
    backgroundImage: `url( ${background} )`,
  };
  return (
    <div className="app" style={backgroundStyle}>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project-1" component={Project1} />
          <Route path="/project-2" component={Project2} />
          <Route path="/project-3" component={Project3} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

// == Export
export default App;
