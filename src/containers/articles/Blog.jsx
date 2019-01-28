import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';
import { fetchAllArticles } from '../../actions/article-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import ArticleThumbnail from '../../components/articles/ArticleThumbnail';

class Blog extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
    this.props.dispatch(fetchAllArticles());
  }

  renderArticleList(articles) {
    return articles.map((article) => {
      return (
        <span key={article._id}>
          <ArticleThumbnail article={article} />
        </span>
      );
    });
  }

  render() {
    if (!this.props.isReady) return null;

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
          </Content>

          <center>{this.renderArticleList(this.props.articles)}</center>

          <ScrollUp />
        </FadeIn>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isReady: state.articles.isReady,
    articles: state.articles.articles
  };
}

export default connect(mapStateToProps)(Blog);
