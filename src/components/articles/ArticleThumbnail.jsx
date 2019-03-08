import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Text from '../../components/common/Text';

let Thumbnail = styled('div')`
  margin-bottom: 5%;
`;

class ArticleThumbnail extends React.Component {
  render() {
    let article = this.props.article;

    return (
      <Thumbnail>
        <Text type="headline5" header>
          {article.title}
        </Text>

        <Text type="body2">{article.body}</Text>
      </Thumbnail>
    );
  }
}

ArticleThumbnail.propTypes = {
  article: PropTypes.object
};

export default ArticleThumbnail;
