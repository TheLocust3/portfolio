import React from 'react';
import { Helmet } from 'react-helmet';
import { Mutation } from 'react-apollo';
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

class NewArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  onSubmit(createArticle, title, body, image, url) {
    return createArticle({ variables: { title: title, body: body, image: image, url: url } })
      .then(({ data }) => {
        history.push(`/blog/${data.createArticle.url}`);
      })
      .catch(({ graphQLErrors }) => {
        throw graphQLErrors[0].message;
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - New Article</title>
          <meta name="description" content="New article." />
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline4" header>
              New Article
            </Text>

            <Mutation
              mutation={gql`
                mutation CreateArticle(
                  $title: String!
                  $body: String!
                  $image: Upload!
                  $url: String!
                ) {
                  createArticle(input: { title: $title, body: $body, image: $image, url: $url }) {
                    id
                    url
                  }
                }
              `}>
              {(createArticle) => (
                <ArticleForm
                  onSubmit={(title, body, image, url) =>
                    this.onSubmit(createArticle, title, body, image, url)
                  }
                />
              )}
            </Mutation>

            <ScrollUp />
          </Content>
        </FadeIn>

        <MDCAutoInit />
      </div>
    );
  }
}

export default connect()(NewArticle);
