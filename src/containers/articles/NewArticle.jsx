import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'react-material-components-web';

import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';
import ArticleForm from '../../components/articles/ArticleForm';

class NewArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - New Article</title>
          <meta name="description" content="New article." />
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline4" header>
              New Article
            </Text>

            <ArticleForm />

            <ScrollUp />
          </Content>
        </FadeIn>

        <MDCAutoInit />
      </div>
    );
  }
}

export default connect()(NewArticle);
