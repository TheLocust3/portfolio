import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../containers/Index';
import Projects from '../containers/Projects';
import Experience from '../containers/Experience';
import SignIn from '../containers/SignIn';

class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/sign-in" component={SignIn} />

                <Route exact path="/" component={Index} />
                <Route exact path="/about" component={Index} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/experience" component={Experience} />
            </Switch>
        );
    }
}

export default AppRoutes;
