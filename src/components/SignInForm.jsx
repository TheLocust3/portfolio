import React from 'react';
import { Text, Button, TextField } from 'react-material-components-web';

import AuthApi from '../api/auth-api';
import { history } from '../constants';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', error: '' };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    AuthApi.signIn(this.state.email, this.state.password)
      .then((response) => {
        history.push('/admin');
      })
      .catch((response) => {
        if (response.status === 401) {
          this.setState({
            error: response.body.message
          });
        } else {
          console.log(response.raw);
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Text type="body2">{this.state.error}</Text>

        <TextField
          label="Email"
          name="email"
          defaultValue={this.state.email}
          onChange={this.handleChange.bind(this)}
        />
        <br />

        <TextField
          type="password"
          label="Password"
          name="password"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <br />

        <Button type="submit">Sign In</Button>

        <input type="submit" style={{ visibility: 'hidden' }} />
      </form>
    );
  }
}

export default SignInForm;
