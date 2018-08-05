import React from 'react';
import styles from './styles.css';
import Breadcrumb from '../../molecules/Breadcrumb/index.js';

const PageHeader = ({ navigations, className, ...props }) => (
  <div className={ className } { ...props }>
    <Breadcrumb items={ navigations } />
  </div>
);
export default PageHeader;
