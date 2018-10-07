import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-material-components-web';

import AuthApi from '../api/auth-api';

class AdminDashboard extends React.Component {
    onSignOutClick() {
        AuthApi.signOut();
    }

    render() {
        return (
            <div className="content">
                <Text type="headline2">Admin Dashboard</Text>

                <Text type="body2">
                    <a href="/" onClick={this.onSignOutClick.bind(this)}>
                        Sign Out
                    </a>
                </Text>
                <br />

                <Text type="text2">Email: {this.props.user.email}</Text>
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
