import React from 'react';
import styles from './styles.css';
import HoverTipInteraction, { Tip, Marker } from '../HoverTipInteraction/index.js';

const Balloon = ({ children, className, ...props }) => (
  <span className={ [ styles.balloon, className ].join(' ') } { ...props }>
{ children }</span>
);

export default Balloon;

export const BalloonTip = ({ children, label, className, ...props }) => (
  <HoverTipInteraction className={ className } { ...props }>
    <Marker><span>{ children }</span></Marker>
    <Tip><Balloon>{ label }</Balloon></Tip>
  </HoverTipInteraction>
);
