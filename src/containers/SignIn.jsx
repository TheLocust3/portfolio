import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'react-material-components-web';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import Content from '../components/common/Content';
import SignInForm from '../components/SignInForm';

class SignIn extends React.Component {
  componentWillMount() {
    this.props.dispatch(setTitle('Sign In'));
    this.props.dispatch(setSolidNavbar(true));
  }

  render() {
    return (
      <Content>
        <Text type="headline2">Sign In</Text>
        <br />

        <SignInForm />

        <MDCAutoInit />
      </Content>
    );
  }
}

export default connect()(SignIn);
