import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import moment from 'moment';

import { IMAGES_URL, MAX_MOBILE_WIDTH } from '../../constants';

import Text from '../../components/common/Text';
import RenderedText from '../../components/common/RenderedText';
import SideMargin from '../../components/common/SideMargin';

let Thumbnail = styled('div')`
  margin-right: 40%;
  margin-bottom: 5%;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    margin-right: 0;
  }
`;

let ThumbnailImage = styled('img')`
  width: 100%;
`;

let ArticleContainer = styled('div')`
  p {
    margin-bottom: 25px;
  }
`;

class ArticleThumbnail extends React.Component {
  render() {
    let article = this.props.article;

    return (
      <Thumbnail>
        <Text type="headline4">{article.title}</Text>
        <br />

        <SideMargin margin="2.5%">
          <ThumbnailImage src={`${IMAGES_URL}blog/${article.image}`} />
          <center>
            <Text type="caption">
              <i>{moment(article.createdAt).format('dddd, MMMM Do YYYY, h:mma')}</i>
            </Text>
          </center>

          <ArticleContainer>
            <RenderedText type="body2" lineClamp={20}>
              {article.body}
            </RenderedText>
          </ArticleContainer>

          <Text type="body2">
            <Link to={`/blog/${article.url}`}>Read More</Link>
          </Text>
        </SideMargin>
      </Thumbnail>
    );
  }
}

ArticleThumbnail.propTypes = {
  article: PropTypes.object
};

export default ArticleThumbnail;
