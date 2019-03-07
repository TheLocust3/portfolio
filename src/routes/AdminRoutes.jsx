import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../containers/SignIn';
import AdminDashboard from '../containers/AdminDashboard';
import NewArticle from '../containers/articles/NewArticle';
import EditArticle from '../containers/articles/EditArticle';
import NotFound from '../containers/NotFound';

class AdminRoutes extends React.Component {
  render() {
    return (
      <Query
        query={gql`
          {
            currentUser {
              id
            }
          }
        `}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return <SignIn />;
          }

          return (
            <Switch>
              <Route exact path="/admin/" component={AdminDashboard} />

              <Route exact path="/admin/articles/new" component={NewArticle} />
              <Route exact path="/admin/articles/:url" component={EditArticle} />

              <Route component={NotFound} />
            </Switch>
          );
        }}
      </Query>
    );
  }
}

export default AdminRoutes;
