import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.scss';

const Section = ({ children, title }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
