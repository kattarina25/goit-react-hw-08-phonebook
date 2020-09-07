import React from 'react';
import { NavLink } from 'react-router-dom';
import { BasePathRoute } from '../../routes';
import styles from './Authenticated.module.css';

const Authenticated = () => (
  <nav>
    <ul className={styles.List}>
      <li className={styles.Item}>
        <NavLink
          exact
          to={BasePathRoute.register}
          className={styles.Link}
          activeClassName={styles.Active}
        >
          SIGN IN
        </NavLink>
      </li>
      <li className={styles.Item}>
        <NavLink
          to={BasePathRoute.login}
          className={styles.Link}
          activeClassName={styles.Active}
        >
          LOG IN
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Authenticated;
