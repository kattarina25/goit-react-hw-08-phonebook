import React from 'react';
import Section from '../components/Section';
import image from './BG.gif';
import styles from './HomeView.module.css';

const HomeView = () => (
  <Section title="HELLO">
    <img src={image} alt="welcome" className={styles.Image} />
  </Section>
);

export default HomeView;
