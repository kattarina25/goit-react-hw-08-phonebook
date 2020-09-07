import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { ContactsOperations, ContactsSelectors } from '../redux/contacts';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

class ContactsView extends Component {
  static propTypes = {
    fetchContacts: T.func.isRequired,
    contactsLenght: T.number.isRequired,
  };

  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }

  render() {
    const { contactsLenght } = this.props;
    return (
      <Section title="Contacts">
        <ContactForm />
        {contactsLenght > 0 && <ContactList />}
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  contactsLenght: ContactsSelectors.getTotalCountContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(ContactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
