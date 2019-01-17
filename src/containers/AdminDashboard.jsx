import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Text } from 'react-material-components-web';

import AuthApi from '../api/auth-api';
import { setSolidNavbar } from '../actions/global-actions';

import FadeIn from '../components/common/FadeIn';
import Content from '../components/common/Content';

class AdminDashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(setSolidNavbar(true));
  }

  onSignOutClick() {
    AuthApi.signOut();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Kinsella - Admin</title>
        </Helmet>

        <FadeIn>
          <Content>
            <Text type="headline2">Admin Dashboard</Text>

            <Text type="body2">
              <a href="/" onClick={this.onSignOutClick.bind(this)}>
                Sign Out
              </a>
            </Text>
            <br />

            <Text type="body1">Email: {this.props.user.email}</Text>
          </Content>
        </FadeIn>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.currentUser
  };
}

export default connect(mapStateToProps)(AdminDashboard);
