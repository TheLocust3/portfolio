import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Button, TextField, TextArea } from 'react-material-components-web';

import { IMAGES_URL } from '../../constants';

import Text from '../common/Text';

let ImagePreview = styled('img')`
  height: 200px;
  width: auto;
`;

export default class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: '', image: '' };
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

  handleUpload(event) {
    let reader = new FileReader();

    reader.onload = (e) => {
      document.getElementById('image').src = e.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);

    this.setState({
      image: event.target.files[0]
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    let article = this.state.article;

    this.props
      .onSubmit(article.title, article.body, this.state.image, article.url)
      .catch((error) => {
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

        <input type="file" onChange={this.handleUpload.bind(this)} accept="image/*" />
        <br />
        <br />

        <ImagePreview id="image" src={`${IMAGES_URL}${this.state.article.image}`} />
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
