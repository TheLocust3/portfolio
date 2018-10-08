import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store, history } from './constants';
import './global-styles';

import Navbar from './containers/common/Navbar';
import Footer from './components/common/Footer';

import NotFound from './containers/NotFound';
import AppRoutes from './routes/AppRoutes';
import AdminRoutes from './routes/AdminRoutes';

// Always start navigation at the top of the page
const ScrollToTop = () => {
    window.scrollTo(0, 0);

    return null;
};

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <div>
                            <Navbar />

                            <Route component={ScrollToTop} />

                            <Switch>
                                <Route path="/admin" component={AdminRoutes} />

                                <Route path="/" component={AppRoutes} />

                                <Route component={NotFound} />
                            </Switch>

                            <Footer />
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
