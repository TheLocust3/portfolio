import React from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'react-material-components-web';

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

  render() {
    return (
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

                  <ArticleForm article={data.article} />

                  <ScrollUp />
                </Content>
              </FadeIn>

              <MDCAutoInit />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default connect()(EditArticle);
