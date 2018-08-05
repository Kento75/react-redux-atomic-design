import React from 'react';
import styles from './styles.css';
import Navigation from '../../molecules/Navigation/index.js';

const Header = ({ className, navigations, ...props }) => (
  <div className={[ styles.root, className ].join(' ')} { ...props }>
    <Navigation items={ navigations } />
  </div>
);
export default Header;
