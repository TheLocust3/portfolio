import React from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';

class ShowArticle extends React.Component {
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

          let article = data.article;

          return (
            <div>
              <Helmet>
                <title>Jake Kinsella - Article</title>
                <meta name="description" content="Show article." />
              </Helmet>

              <FadeIn>
                <Content>
                  <Text type="headline4" header>
                    {article.title}
                  </Text>

                  <Text type="body1" header>
                    {article.body}
                  </Text>

                  <ScrollUp />
                </Content>
              </FadeIn>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default connect()(ShowArticle);
