import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../../actions/global-actions';

import Text from '../../components/common/Text';
import ScrollUp from '../../components/common/ScrollUp';
import Content from '../../components/common/Content';
import FadeIn from '../../components/common/FadeIn';

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

            <ScrollUp />
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(NewArticle);