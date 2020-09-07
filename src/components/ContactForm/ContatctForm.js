import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { ContactsOperations, ContactsSelectors } from '../../redux/contacts';
import errorMessage from '../../helpers/errorMessage';
import classes from '../../helpers/classes';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
    contacts: T.arrayOf(
      T.shape({
        name: T.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    errorMessage.closeError();
    this.setState({ [name]: value.toLowerCase() });
  };

  validateContact() {
    const { name } = this.state;
    const { contacts } = this.props;
    return contacts.map(item => item.name).includes(name);
  }

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    if (this.validateContact()) {
      errorMessage.showError(`${name} is already in contacts`);
    } else {
      this.props.onSubmit({ name, number });
    }
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    return (
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
              label="Contact Name"
              name="name"
              value={name}
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="number"
              value={number}
              label="Number"
              type="number"
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add new contact
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: ContactsSelectors.getAllContacts(state),
});

const mapDispatchToPrors = dispatch => ({
  onSubmit: contact => dispatch(ContactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToPrors)(ContactForm);
