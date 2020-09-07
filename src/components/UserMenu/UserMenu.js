import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import Button from '@material-ui/core/Button';
import { UsersSelectors, UsersOperations } from '../../redux/users';
import defaultImage from './defaultImage.jpg';
import styles from './UserMenu.module.css';
import classes from '../../helpers/classes';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.UserMenu}>
    <img
      className={styles.Avatar}
      src={avatar}
      alt="avatar"
      width="32"
      height="32"
    />
    <span>Welcome, {name}</span>
    <Button
      type="button"
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

UserMenu.propTypes = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  onLogout: T.func.isRequired,
};

const mapStateToProps = state => ({
  name: UsersSelectors.getUsername(state),
  avatar: defaultImage,
});

const mapDispatchToProps = {
  onLogout: UsersOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
