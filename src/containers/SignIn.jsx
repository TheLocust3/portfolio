import React from 'react';
import { Helmet } from 'react-helmet';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { MDCAutoInit } from 'react-material-components-web';

import { setCookie } from '../helpers';
import { history } from '../constants';
import { setSolidNavbar } from '../actions/global-actions';

import Text from '../components/common/Text';
import Content from '../components/common/Content';
import SideMargin from '../components/common/SideMargin';
import SignInForm from '../components/SignInForm';

class SignIn extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  onSubmit(signIn, email, password) {
    return signIn({ variables: { email: email, password: password } })
      .then(({ data }) => {
        setCookie('token', data.signIn.token, 1);

        history.push('/admin');
        window.location.reload();
      })
      .catch(({ graphQLErrors }) => {
        console.log(graphQLErrors);
        throw graphQLErrors[0].message;
      });
  }

  render() {
    return (
      <Content>
        <Helmet>
          <title>Jake Kinsella - Sign In</title>
        </Helmet>

        <Text type="headline2">Sign In</Text>
        <br />

        <SideMargin margin="5%">
          <Mutation
            mutation={gql`
              mutation SignIn($email: String!, $password: String!) {
                signIn(email: $email, password: $password) {
                  id
                  token
                }
              }
            `}>
            {(signIn) => (
              <SignInForm onSubmit={(email, password) => this.onSubmit(signIn, email, password)} />
            )}
          </Mutation>
        </SideMargin>

        <MDCAutoInit />
      </Content>
    );
  }
}

export default connect()(SignIn);
