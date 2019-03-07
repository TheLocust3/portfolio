import React from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../helpers';
import { setSolidNavbar } from '../actions/global-actions';

import Text from '../components/common/Text';
import FadeIn from '../components/common/FadeIn';
import Content from '../components/common/Content';
import ArticleList from '../components/articles/ArticleList';

class AdminDashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <Query
        query={gql`
          {
            currentUser {
              id
              email
            }

            articles {
              id
              title
              body
              image
              url
            }
          }
        `}>
        {({ loading, error, data }) => {
          if (loading) return <Text type="body2">Loading...</Text>;
          if (error) return <Text type="body2">Error</Text>;

          return (
            <div>
              <Helmet>
                <title>Jake Kinsella - Admin</title>
              </Helmet>

              <FadeIn>
                <Content>
                  <Text type="headline3" header>
                    Admin Dashboard
                  </Text>

                  <Text type="body2">
                    <a href="/" onClick={() => signOut()}>
                      Sign Out
                    </a>
                  </Text>
                  <br />

                  <Text type="body1">Email: {data.currentUser.email}</Text>
                  <br />

                  <div>
                    <Text type="headline5">Articles</Text>

                    <Text type="body2">
                      <Link to="/admin/articles/new">New Article</Link>
                    </Text>

                    <ArticleList articles={data.articles} />
                  </div>
                </Content>
              </FadeIn>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default connect()(AdminDashboard);
