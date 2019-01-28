import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';

import { MAX_MOBILE_WIDTH } from '../../constants';

import Text from '../../components/common/Text';

let cardClassName = css`
  display: inline-block;

  height: 350px;
  width: 400px;

  margin: 2%;

  text-align: left;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    width: 90%;
    margin: 5%;
  }
`;

class ArticleThumbnail extends React.Component {
  render() {
    let article = this.props.article;

    return (
      <div className={`mdc-card ${cardClassName}`}>
        <div className="mdc-card__primary-action" tabIndex="0">
          <Text type="headline6" header>
            {article.title}
          </Text>

          <Text type="body2" header>
            {article.body}
          </Text>
        </div>
      </div>
    );
  }
}

ArticleThumbnail.propTypes = {
  article: PropTypes.object
};

export default ArticleThumbnail;
