import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { store } from './constants';

import Index from './containers/Index';
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
                    <Router>
                        <div>
                            <Route component={ScrollToTop} />

                            <Switch>
                                <Route exact path="/" component={Index} />

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
