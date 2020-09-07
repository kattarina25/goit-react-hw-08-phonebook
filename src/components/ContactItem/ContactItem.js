import React from 'react';
import T from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ContactItem = ({ name, number, deleteContact }) => (
  <>
    <ListItemAvatar>
      <HighlightOffIcon
        color="primary"
        fontSize="large"
        onClick={deleteContact}
      />
    </ListItemAvatar>
    <ListItemText primary={name} secondary={number} />
  </>
);

ContactItem.propTypes = {
  name: T.string.isRequired,
  number: T.string.isRequired,
  deleteContact: T.func.isRequired,
};

export default ContactItem;
