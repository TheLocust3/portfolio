import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { store, history } from './constants';

import NotFound from './containers/NotFound';
import AppRoutes from './routes/AppRoutes';
import AdminRoutes from './routes/AdminRoutes';

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
                                <Route path="/admin" component={AdminRoutes} />

                                <Route path="/" component={AppRoutes} />

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
