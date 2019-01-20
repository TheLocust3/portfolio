import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchCurrentUser } from '../actions/user-actions';

import SignIn from '../containers/SignIn';
import AdminDashboard from '../containers/AdminDashboard';
import AllArticles from '../containers/articles/AllArticles';
import NewArticle from '../containers/articles/NewArticle';
import EditArticle from '../containers/articles/EditArticle';
import NotFound from '../containers/NotFound';

class AdminRoutes extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchCurrentUser());
  }

  render() {
    if (!this.props.isReady) return null;

    if (_.isEmpty(this.props.user)) {
      return <SignIn />;
    }

    return (
      <Switch>
        <Route exact path="/admin/" component={AdminDashboard} />

        {/* <Route exact path="/admin/articles" component={AllArticles} /> */}
        {/* <Route exact path="/admin/articles/new" component={NewArticle} /> */}
        {/* <Route exact path="/admin/articles/:url" component={EditArticle} /> */}

        <Route component={NotFound} />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    isReady: state.users.isReady,
    user: state.users.currentUser
  };
}
export default connect(mapStateToProps)(AdminRoutes);
