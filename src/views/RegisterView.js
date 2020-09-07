import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { UsersOperations } from '../redux/users';
import Section from '../components/Section';
import classes from '../helpers/classes';

class RegisterView extends Component {
  static propTypes = {
    onRegister: T.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { onRegister } = this.props;
    event.preventDefault();
    onRegister(this.state);
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Section title="Register">
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <form
              className={classes.form}
              onSubmit={this.handleSubmit}
              autoComplete="off"
              validate="true"
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Name"
                name="name"
                autoFocus
                value={name}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onRegister: UsersOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
