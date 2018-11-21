import React from 'react';
import { connect } from 'react-redux';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Text from '../components/common/Text';
import Content from '../components/common/Content';
import FadeIn from '../components/common/FadeIn';

class NotFound extends React.Component {
  componentWillMount() {
    this.props.dispatch(setTitle('Not Found'));
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <FadeIn>
        <Content>
          <br />

          <Text type="headline3">Page Not Found</Text>
          <br />

          <Text type="body1">You've managed to find a page that doesn't exist!</Text>
        </Content>
      </FadeIn>
    );
  }
}

export default connect()(NotFound);
