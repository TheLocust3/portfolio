import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { setSolidNavbar } from '../actions/global-actions';

import Text from '../components/common/Text';
import Content from '../components/common/Content';
import FadeIn from '../components/common/FadeIn';

class NotFound extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - 404 Not Found</title>
          <meta name="description" content="404 Page not found" />
        </Helmet>
        +
        <FadeIn>
          <Content>
            <br />

            <Text type="headline3">Page Not Found</Text>
            <br />

            <Text type="body1">You've managed to find a page that doesn't exist!</Text>
          </Content>
        </FadeIn>
      </div>
    );
  }
}

export default connect()(NotFound);
