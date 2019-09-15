import React from 'react';
import { Helmet } from 'react-helmet';
import { Query, Mutation } from 'react-apollo';
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

  onRemoveArticle(removeArticle, id) {
    return removeArticle({ variables: { id: id } })
      .then(() => {
        window.location.reload();
      })
      .catch(({ graphQLErrors }) => {
        throw graphQLErrors[0].message;
      });
  }

  render() {
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
                console.log(error);
                if (loading) return <Text type="body2">Loading...</Text>;
                if (error) return <Text type="body2">Error</Text>;

                return (
                  <div>
                    <Text type="body1">Email: {data.currentUser.email}</Text>
                    <br />

                    <div>
                      <Text type="headline5">Articles</Text>

                      <Text type="body2">
                        <Link to="/admin/articles/new">New Article</Link>
                      </Text>

                      <Mutation
                        mutation={gql`
                          mutation RemoveArticle($id: String!) {
                            removeArticle(id: $id) {
                              message
                            }
                          }
                        `}>
                        {(removeArticle) => (
                          <ArticleList
                            articles={data.articles}
                            remove={(id) => this.onRemoveArticle(removeArticle, id)}
                          />
                        )}
                      </Mutation>
                    </div>
                  </div>
                );
              }}
            </Query>
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(AdminDashboard);
