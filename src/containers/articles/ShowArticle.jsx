import React from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import moment from 'moment';

import { IMAGES_URL } from '../../constants';
import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import RenderedText from '../../components/common/RenderedText';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import SideMargin from '../../components/common/SideMargin';

let ArticleImage = styled('img')`
  width: 100%;
`;

class ShowArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <div>
        <FadeIn>
          <Content>
            <Query
              query={gql`
                {
                  article(url: "${this.props.match.params.url}") {
                    id
                    title
                    body
                    image
                    url
                    createdAt
                  }
                }
              `}>
              {({ loading, error, data }) => {
                if (loading) return <Text type="body2">Loading...</Text>;
                if (error) return <Text type="body2">Error</Text>;

                let article = data.article;

                return (
                  <div>
                    <Helmet>
                      <title>Jake Kinsella - {data.article.title}</title>
                    </Helmet>

                    <SideMargin leftMargin="20%" rightMargin="20%">
                      <Text type="headline3" header>
                        {article.title}
                      </Text>
                      <br />
                      <br />

                      <SideMargin margin="2.5%">
                        <ArticleImage src={`${IMAGES_URL}${article.image}`} />
                        <center>
                          <Text type="caption">
                            <i>{moment(article.createdAt).format('dddd, MMMM Do YYYY, h:mma')}</i>
                          </Text>
                        </center>
                        <br />

                        <RenderedText type="body2">{article.body}</RenderedText>
                      </SideMargin>
                    </SideMargin>
                  </div>
                );
              }}
            </Query>

            <ScrollUp />
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(ShowArticle);
