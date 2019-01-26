import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';
import { fetchAllArticles } from '../../actions/article-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';

class AllArticles extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
    this.props.dispatch(fetchAllArticles());
  }

  renderArticleList(articles) {
    return articles.map((article) => {
      return (
        <div key={article._id}>
          <Link to={`/articles/${article.url}`}>{article.title}</Link>
        </div>
      );
    });
  }

  render() {
    if (!this.props.isReady) return null;

    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Articles</title>
          <meta name="description" content="All articles." />
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline4" header>
              All Articles
            </Text>

            <div>{this.renderArticleList(this.props.articles)}</div>

            <ScrollUp />
          </Content>
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

export default connect(mapStateToProps)(AllArticles);
