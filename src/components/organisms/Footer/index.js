import React from 'react';
import styles from './styles.css';
import Copyright from '../../molecules/Copyright/index.js';

const Footer = ({ tag:Tag = 'footer', className, ...props }) => (
  <Tag className={[ styles.root, className ].join(' ')} { ...props }>
    <Copyright>Yusuke Goto</Copyright>
  </Tag>
);
export default Footer;
