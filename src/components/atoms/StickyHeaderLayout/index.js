import React from 'react';
import styles from './styles.css';

const StickyHeaderLayout = ({ tag:Tag = 'div', children, ...props }) => (
  <Tag { ...props }>
    <div className={ styles.sticky }>{ children[0] }</div>
    <div className={ styles.body }>{ children[1] }</div>
  </Tag>
);

export default StickyHeaderLayout;
