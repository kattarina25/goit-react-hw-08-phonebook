import React from 'react';
import T from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);
Section.propTypes = {
  title: T.string.isRequired,
  children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
};

export default Section;
