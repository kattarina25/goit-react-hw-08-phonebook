import axios from 'axios';
import ContactsActions from './ContactsActions';

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = ContactsActions;

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const response = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
