import React from 'react';
import { connect } from 'react-redux';
import { Text, MDCAutoInit } from 'react-material-components-web';

import SignInForm from '../components/SignInForm';

class SignIn extends React.Component {
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
