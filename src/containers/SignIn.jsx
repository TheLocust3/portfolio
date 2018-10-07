import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'react-material-components-web';

import { history } from '../constants';
import { fetchCurrentUser } from '../actions/user-actions';

import SignInForm from '../components/SignInForm';

class SignIn extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        if (!this.props.isReady) return null;
        if (!_.isEmpty(this.props.user)) {
            history.push('/');
        }

        return (
            <div className="content">
                <Text type="headline2">Sign In</Text>
                <br />

                <SignInForm />

                <MDCAutoInit />
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

export default connect(mapStateToProps)(SignIn);
