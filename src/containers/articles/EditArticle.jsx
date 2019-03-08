import React from 'react';
import { Helmet } from 'react-helmet';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'react-material-components-web';

import { history } from '../../constants';
import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import ArticleForm from '../../components/articles/ArticleForm';

class EditArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  onSubmit(updateArticle, id, title, body, image, url) {
    return updateArticle({
      variables: { id: id, title: title, body: body, image: image, url: url }
    })
      .then(({ data }) => {
        history.push(`/blog/${data.updateArticle.url}`);
      })
      .catch(({ graphQLErrors }) => {
        throw graphQLErrors[0].message;
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Edit Article</title>
          <meta name="description" content="Edit article." />
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline4" header>
              Edit Article
            </Text>
            <Query
              query={gql`
                {
                  article(url: "${this.props.match.params.url}") {
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
                  <Mutation
                    mutation={gql`
                      mutation UpdateArticle(
                        $id: String!
                        $title: String!
                        $body: String!
                        $image: Upload!
                        $url: String!
                      ) {
                        updateArticle(
                          id: $id
                          input: { title: $title, body: $body, image: $image, url: $url }
                        ) {
                          id
                          url
                        }
                      }
                    `}>
                    {(updateArticle) => (
                      <ArticleForm
                        article={data.article}
                        onSubmit={(title, body, image, url) =>
                          this.onSubmit(updateArticle, data.article.id, title, body, image, url)
                        }
                      />
                    )}
                  </Mutation>
                );
              }}
            </Query>

            <ScrollUp />
          </Content>
        </FadeIn>

        <MDCAutoInit />
      </div>
    );
  }
}

export default connect()(EditArticle);
