/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
// import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <Route path="/aboutme" component={AboutMe} /> */}
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </div>
);

export default Main;
