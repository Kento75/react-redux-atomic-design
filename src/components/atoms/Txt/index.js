import React from 'react';
import styles from './styles.css';

const txtFactory = role => ({ tag:Tag = 'p', size = 'm', className, ...props }) => (
  <Tag className={ [ styles[role], styles[size], className ].join(' ') } { ...props } />
);

const Txt = txtFactory('default');
export default Txt;

export const InfoTxt = txtFactory('info');
export const WarningTxt = txtFactory('warning');
export const LinkTxt = txtFactory('link');

Object.assign(InfoTxt, { displayName: 'InfoTxt' });
