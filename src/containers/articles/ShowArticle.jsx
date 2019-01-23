import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';
import { fetchArticle } from '../../actions/article-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';

class ShowArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
    this.props.dispatch(fetchArticle(this.props.match.params.url));
  }

  render() {
    if (!this.props.isReady) return null;

    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Article</title>
          <meta name="description" content="Show article." />
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline4" header>
              Show Article
            </Text>

            <ScrollUp />
          </Content>
        </FadeIn>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isReady: state.articles.isReady,
    article: state.articles.article
  };
}

export default connect(mapStateToProps)(ShowArticle);
