import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import { ContactsSelectors, ContactsOperations } from '../../redux/contacts';
import ContactItem from '../ContactItem';
import Filter from '../Filter';
import classes from '../../helpers/classes';

const ContactList = ({ contacts, deleteContact }) => (
  <Container component="main" maxWidth="xs">
    <Filter />
    <List className={classes.root}>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem
            name={name}
            number={number}
            deleteContact={() => deleteContact(id)}
          />
        </ListItem>
      ))}
    </List>
  </Container>
);

ContactList.propTypes = {
  contacts: T.arrayOf(T.shape({ id: T.string.isRequired })).isRequired,
  deleteContact: T.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: ContactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(ContactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
