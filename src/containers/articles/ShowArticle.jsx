import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import moment from 'moment';

import { IMAGES_URL, MAX_MOBILE_WIDTH } from '../../constants';
import { setSolidNavbar } from '../../actions/global-actions';
import { getArticle } from '../../api/articles';

import Text from '../../components/common/Text';
import RenderedText from '../../components/common/RenderedText';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import SideMargin from '../../components/common/SideMargin';
import NotFound from '../NotFound'

let ArticleImage = styled('img')`
  width: 100%;
`;

let ArticleContainer = styled('div')`
  margin-right: 20%;
  margin-left: 20%;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    margin-top: 100px;
    margin-right: 10%;
    margin-left: 10%;
  }

  p {
    margin-bottom: 25px;
  }
`;

class ShowArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    let article = getArticle(this.props.match.params.url)

    if (article === undefined) {
      return <NotFound />;
    }

    return (
      <div>
        <FadeIn>
          <Content>
            <div>
              <Helmet>
                <title>Jake Kinsella - {article.title}</title>
              </Helmet>

              <ArticleContainer>
                <Text type="headline3">{article.title}</Text>
                <br />
                <br />

                <SideMargin margin="2.5%">
                  <ArticleImage src={`${IMAGES_URL}blog/${article.image}`} />
                  <center>
                    <Text type="caption">
                      <i>{moment(article.createdAt).format('dddd, MMMM Do YYYY, h:mma')}</i>
                    </Text>
                  </center>
                  <br />

                  <RenderedText type="body2">{article.body}</RenderedText>
                </SideMargin>
              </ArticleContainer>
            </div>

            <ScrollUp />
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(ShowArticle);
