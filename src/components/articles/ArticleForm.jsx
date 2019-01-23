import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import { history } from '../../constants';
import ArticleApi from '../../api/article-api';

export default class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { article: this.props.article, errors: {} };
  }

  handleChange(event) {
    let article = this.state.article;
    article[event.target.name] = event.target.value;

    this.setState({
      article: article
    });
  }

  handleSubmit(event) {
    let article = this.state.article;

    if (_.isEmpty(this.props.article)) {
      ArticleApi.create(article.title, article.body, article.image, article.url)
        .then((response) => {
          history.push(`/articles/${response.id}`);
        })
        .catch((response) => {
          this.setState({
            errors: response.responseJSON.errors
          });
        });
    } else {
      ArticleApi.update(
        this.props.article.id,
        article.title,
        article.body,
        article.image,
        article.url
      )
        .then((response) => {
          history.push(`/articles/${this.props.article.id}`);
        })
        .catch((response) => {
          this.setState({
            errors: response.responseJSON.errors
          });
        });
    }
  }

  render() {
    return <div>Form</div>;
  }
}

ArticleForm.propTypes = {
  article: PropTypes.object
};
