import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../containers/Index';
import SignIn from '../containers/SignIn';

class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/sign-in" component={SignIn} />

                <Route exact path="/" component={Index} />
            </Switch>
        );
    }
}

export default AppRoutes;
