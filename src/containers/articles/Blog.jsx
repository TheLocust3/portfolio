import React from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import SideMargin from '../../components/common/SideMargin';
import FadeIn from '../../components/common/FadeIn';
import ArticleThumbnail from '../../components/articles/ArticleThumbnail';

class Blog extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  renderArticleList(articles) {
    return articles.map((article) => {
      return (
        <span key={article.id}>
          <ArticleThumbnail article={article} />
        </span>
      );
    });
  }

  render() {
    return (
      <Query
        query={gql`
          {
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
                <title>Jake Kinsella - Blog</title>
                <meta name="description" content="Blog." />
              </Helmet>

              <FadeIn>
                <Content>
                  <Text type="headline3" header>
                    Blog
                  </Text>
                  <br />

                  <SideMargin margin="2.5%">{this.renderArticleList(data.articles)}</SideMargin>
                </Content>

                <ScrollUp />
              </FadeIn>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default connect()(Blog);
