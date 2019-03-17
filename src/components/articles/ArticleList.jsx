import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Text from '../../components/common/Text';

class ArticleList extends React.Component {
  renderArticleList(articles) {
    return articles.map((article) => {
      return (
        <li key={article.id}>
          <Text type="body1">
            <Link to={`/blog/${article.url}`}>{article.title}</Link> |{' '}
            <Link to={`/admin/articles/${article.url}`}>Edit</Link> |{' '}
            <a href="#" onClick={() => this.props.remove(article.id)}>
              Delete
            </a>
          </Text>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderArticleList(this.props.articles)}</ul>
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
};

export default ArticleList;
