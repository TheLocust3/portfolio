import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, TextArea } from 'react-material-components-web';

import Text from '../common/Text';

export default class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
    if (_.isEmpty(this.props.article)) {
      this.state.article = {};
    } else {
      this.state.article = this.props.article;
    }
  }

  handleChange(event) {
    let article = this.state.article;
    article[event.target.name] = event.target.value;

    this.setState({
      article: article
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    let article = this.state.article;

    this.props.onSubmit(article.title, article.body, article.image, article.url).catch((error) => {
      this.setState({
        error: error
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Text type="body2">{this.state.error}</Text>

        <TextField
          label="Title"
          name="title"
          defaultValue={this.state.article.title}
          onChange={this.handleChange.bind(this)}
          required
        />
        <br />
        <br />

        <TextArea
          label="Body"
          name="body"
          defaultValue={this.state.article.body}
          onChange={this.handleChange.bind(this)}
          required
        />
        <br />
        <br />

        <TextField
          label="Image URL"
          name="image"
          defaultValue={this.state.article.image}
          onChange={this.handleChange.bind(this)}
          required
        />
        <br />
        <br />

        <TextField
          label="Url"
          name="url"
          defaultValue={this.state.article.url}
          onChange={this.handleChange.bind(this)}
          required
        />
        <br />
        <br />

        <Button type="submit" noRipple>
          Save
        </Button>

        <input type="submit" style={{ visibility: 'hidden' }} />
      </form>
    );
  }
}

ArticleForm.propTypes = {
  article: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};
