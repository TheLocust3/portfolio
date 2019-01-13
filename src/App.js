import $ from 'jquery';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import { store, history } from './constants';
import './global-styles';

import Navbar from './containers/common/Navbar';
import Footer from './components/common/Footer';

import AppRoutes from './routes/AppRoutes';
import AdminRoutes from './routes/AdminRoutes';

// Always start navigation at the top of the page
const ScrollToTop = () => {
  $('html, body').scrollTop(0);

  return null;
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Jake Kinsella</title>
          </Helmet>

          <Router history={history}>
            <div>
              <Navbar />

              <Route component={ScrollToTop} />

              <Switch>
                <Route path="/admin" component={AdminRoutes} />

                <Route path="/" component={AppRoutes} />
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
