import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { fetchCurrentUser } from '../actions/user-actions';

import SignIn from '../containers/SignIn';
import AdminDashboard from '../containers/AdminDashboard';

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
        <Route path="/" component={AdminDashboard} />
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
