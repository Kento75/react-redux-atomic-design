import React, { cloneElement } from 'react';
import styles from './styles.css';

const Card = ({ tag:Tag = 'section', className, ...props }) => (
  <Tag className={[ styles.card, className ].join(' ')} { ...props } />
);
export default Card;

export const CardHeader = ({ className, ...props }) => (
  <div className={[ styles.header, className ].join(' ')} { ...props } />
);
