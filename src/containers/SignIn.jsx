import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'react-material-components-web';

import { setTitle, setSolidNavbar } from '../actions/global-actions';

import SignInForm from '../components/SignInForm';

class SignIn extends React.Component {
    componentWillMount() {
        this.props.dispatch(setTitle('Sign In'));
        this.props.dispatch(setSolidNavbar(true));
    }

    render() {
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

export default connect()(SignIn);
