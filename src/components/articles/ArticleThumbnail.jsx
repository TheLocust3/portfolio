import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Text from '../../components/common/Text';
import RenderedText from '../../components/common/RenderedText';
import SideMargin from '../../components/common/SideMargin';

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

        <SideMargin margin="2.5%">
          <RenderedText type="body2" lineClamp={20}>
            {article.body}
          </RenderedText>
        </SideMargin>
      </Thumbnail>
    );
  }
}

ArticleThumbnail.propTypes = {
  article: PropTypes.object
};

export default ArticleThumbnail;
