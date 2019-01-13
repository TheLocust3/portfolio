import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Text } from 'react-material-components-web';

import { setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import SignInForm from '../components/SignInForm';

class SignIn extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <Content>
        <Helmet>
          <title>Jake Kinsella - Sign In</title>
        </Helmet>

        <Text type="headline2">Sign In</Text>
        <br />

        <SignInForm />
      </Content>
    );
  }
}

export default connect()(SignIn);
