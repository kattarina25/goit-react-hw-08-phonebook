import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { UsersOperations } from '../redux/users';
import Section from '../components/Section';
import classes from '../helpers/classes';

class LoginView extends Component {
  static propTypes = {
    onLogin: T.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { onLogin } = this.props;
    event.preventDefault();
    onLogin(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Section title="Login">
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <form
              className={classes.form}
              validate="true"
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                value={email}
                type="email"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: UsersOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
