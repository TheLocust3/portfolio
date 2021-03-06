import _ from 'lodash';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import { setSolidNavbar } from '../../actions/global-actions';
import { MAX_MOBILE_WIDTH } from '../../constants';
import { getAllArticles } from '../../api/articles';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import SideMargin from '../../components/common/SideMargin';
import FadeIn from '../../components/common/FadeIn';
import ArticleThumbnail from '../../components/articles/ArticleThumbnail';
import ArchivesSidebar from '../../components/articles/ArchivesSidebar';

let PagePadding = styled('div')`
  margin-bottom: 50vh;
`;

let Spacer = styled('div')`
  margin-top: 7.5%;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    margin-top: 100px;
  }
`;

class Blog extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  renderArticleList(articles) {
    if (_.isEmpty(articles)) {
      return (
        <PagePadding>
          <br />
          <Text type="headline5">Stay tuned for my first blog post</Text>
        </PagePadding>
      );
    }

    return _.reverse(_.sortBy(articles, (article) => article.createdAt)).map((article) => {
      return (
        <span key={article.id}>
          <ArticleThumbnail article={article} />
        </span>
      );
    });
  }

  render() {
    let articles = getAllArticles()

    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Blog</title>
          <meta
            name="description"
            content="Blogging about being a junior developer in college, trying to start my career as a software developers and entrepreneur."
          />
        </Helmet>

        <FadeIn>
          <Content>
            <Spacer />
            <Text type="headline3" header>
              Blog
            </Text>
            <br />
            <br />
            <br />

            <SideMargin margin="2.5%">
              <div>
                {this.renderArticleList(articles)}

                <ArchivesSidebar articles={articles} />
              </div>
            </SideMargin>
          </Content>

          <ScrollUp />
        </FadeIn>
      </div>
    );
  }
}

export default connect()(Blog);
