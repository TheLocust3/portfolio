import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { store, history } from './constants';

import Index from './containers/Index';
import SignIn from './containers/SignIn';
import NotFound from './containers/NotFound';

// Always start navigation at the top of the page
const ScrollToTop = () => {
    window.scrollTo(0, 0);

    return null;
};

class Base extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <div>
                            <Route component={ScrollToTop} />

                            <Switch>
                                <Route exact path="/" component={Index} />
                                <Route exact path="/sign-in" component={SignIn} />

                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<Base />, document.getElementById('root'));

serviceWorker.unregister();
