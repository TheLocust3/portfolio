import React from 'react';

import { ConnectedState, ConnectedDispatch } from '../../containers/admin/IndexContainer';
import Admin from '../../../api/admin'

export default class Index extends React.Component<ConnectedState & ConnectedDispatch, any> {

    constructor(props) {
        super(props);

        this.state = { email: '', password: '' };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        Admin.signIn(this.state.email, this.state.password).then((response) => {
            window.location.href = '/admin';
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.onSubmit}>
                    Email:
                    <input type="email" onChange={this.onChange} /><br /><br />

                    Password
                    <input type="password" onChange={this.onChange} /><br /><br />

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
