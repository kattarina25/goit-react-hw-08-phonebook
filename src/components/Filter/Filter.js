import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { ContactsActions, ContactsSelectors } from '../../redux/contacts';
import classes from '../../helpers/classes';

const Filter = ({ value, onChange }) => (
  <div className={classes.paper}>
    <TextField
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
      fullWidth
      label="Searching..."
    />
  </div>
);

Filter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};

const mapStateToProps = state => ({
  value: ContactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(ContactsActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
