import React from 'react';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import { IMAGES_URL } from '../../constants';
import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import RenderedText from '../../components/common/RenderedText';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import SideMargin from '../../components/common/SideMargin';

let ArticleImage = styled('img')`
  width: 80vw;
`;

class ShowArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Article</title>
          <meta name="description" content="Show article." />
        </Helmet>

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
                  }
                }
              `}>
              {({ loading, error, data }) => {
                if (loading) return <Text type="body2">Loading...</Text>;
                if (error) return <Text type="body2">Error</Text>;

                let article = data.article;

                return (
                  <div>
                    <Text type="headline3" header>
                      {article.title}
                    </Text>
                    <br />
                    <br />

                    <center>
                      <ArticleImage src={`${IMAGES_URL}${article.image}`} />
                    </center>
                    <br />

                    <SideMargin margin="5%">
                      <RenderedText type="body1">{article.body}</RenderedText>
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
