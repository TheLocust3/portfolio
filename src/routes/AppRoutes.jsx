import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../containers/Index';
import Blog from '../containers/articles/Blog';
import Experience from '../containers/Experience';
import Projects from '../containers/Projects';
import SignIn from '../containers/SignIn';
import NotFound from '../containers/NotFound';

import CandidateXYZ from '../containers/projects/CandidateXYZ';
import Intel8080 from '../containers/projects/Intel8080';
import GameboyEmulator from '../containers/projects/GameboyEmulator';
import PongAimbot from '../containers/projects/PongAimbot';
import FullStackVM from '../containers/projects/FullStackVM';

import ShowArticle from '../containers/articles/ShowArticle';
import Archives from '../containers/articles/Archives';

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />

        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={Index} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects/candidatexyz" component={CandidateXYZ} />
        <Route exact path="/projects/intel8080" component={Intel8080} />
        <Route exact path="/projects/gameboy-emulator" component={GameboyEmulator} />
        <Route exact path="/projects/pong-aimbot" component={PongAimbot} />
        <Route exact path="/projects/full-stack-vm" component={FullStackVM} />

        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:url" component={ShowArticle} />
        <Route exact path="/archives/:year/:month" component={Archives} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default AppRoutes;
