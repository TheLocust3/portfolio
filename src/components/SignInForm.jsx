import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from 'react-material-components-web';

import Text from '../components/common/Text';

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

    this.props.onSubmit(this.state.email, this.state.password).catch((error) => {
      this.setState({
        error: error
      });
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

        <Button type="submit" noRipple>
          Sign In
        </Button>

        <input type="submit" style={{ visibility: 'hidden' }} />
      </form>
    );
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignInForm;
