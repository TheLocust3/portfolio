import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text } from 'react-material-components-web';

import { fetchCurrentUser } from '../actions/user-actions';
import AuthApi from '../api/auth-api';

class Index extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    onSignOutClick() {
        AuthApi.signOut();
        window.location.reload();
    }

    renderAuthLinks() {
        if (_.isEmpty(this.props.user)) {
            return (
                <Link to="/sign-in">
                    <Text type="body2">Sign In</Text>
                </Link>
            );
        }

        return (
            <a href="/" onClick={this.onSignOutClick.bind(this)}>
                <Text type="body2">Sign Out</Text>
            </a>
        );
    }

    render() {
        if (!this.props.isReady) return null;

        return (
            <div className="content">
                {this.renderAuthLinks()}

                <Text type="body1">Hello {this.props.user.email}</Text>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isReady: state.users.isReady,
        user: state.users.currentUser
    };
}

export default connect(mapStateToProps)(Index);
