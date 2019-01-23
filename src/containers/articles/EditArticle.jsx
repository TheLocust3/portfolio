import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';
import { fetchArticle } from '../../actions/article-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import ArticleForm from '../../components/articles/ArticleForm';

class EditArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
    this.props.dispatch(fetchArticle(this.props.match.params.url));
  }

  render() {
    if (!this.props.isReady) return null;

    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Edit Article</title>
          <meta name="description" content="Edit article." />
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline4" header>
              Edit Article
            </Text>

            <ArticleForm article={this.props.article} />

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

export default connect(mapStateToProps)(EditArticle);
