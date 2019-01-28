import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ArticleApi from '../../api/article-api';

import Text from '../../components/common/Text';

class ArticleList extends React.Component {
  onDeleteClick(id) {
    ArticleApi.destroy(id).then(() => {
      window.location.reload();
    });
  }

  renderArticleList(articles) {
    return articles.map((article) => {
      return (
        <li key={article._id}>
          <Text type="body1">
            <Link to={`/articles/${article.url}`}>{article.title}</Link> |{' '}
            <Link to={`/admin/articles/${article.url}`}>Edit</Link> |{' '}
            <a href="#" onClick={() => this.onDeleteClick(article._id)}>
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
  articles: PropTypes.array.isRequired
};

export default ArticleList;
