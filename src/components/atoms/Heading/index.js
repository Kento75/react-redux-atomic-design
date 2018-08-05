import React from 'react';
import styles from './styles.css';
import { containPresenter } from '../../utils/HoC.js';

export const HeadingPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props,
}) => (
  <Tag className={[ styles.h, styles[`h${ visualLevel }`], className ].join(' ')} { ...props } />
);

export const HeadingUnderlinedPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props,
}) => (
  <Tag className={[ styles.h, styles.underlined, styles[`h${ visualLevel }`], className ].join(' ')} { ...props } />
);

export const HeadingOutlinedPresenter = ({
  tag:Tag,
  visualLevel,
  className,
  ...props,
}) => (
  <Tag className={[ styles.h, styles.outlined, styles[`h${ visualLevel }`], className ].join(' ')} { ...props } />
);

export const HeadingContainer = ({
  presenter,
  level = 2,
  visualLevel,
  ...props,
}) => {
  level = Math.max(1, Math.min(6, level));
  visualLevel = Math.max(1, Math.min(6, (typeof visualLevel !== 'undefined') ?  visualLevel : level));
  const tag = `h${ level }`;

  return presenter({ tag, visualLevel, ...props });
};

const Heading = containPresenter(HeadingContainer, HeadingPresenter);
export default Heading;

export const HeadingUnderlined = containPresenter(HeadingContainer, HeadingUnderlinedPresenter);
export const HeadingOutlined = containPresenter(HeadingContainer, HeadingOutlinedPresenter);

Object.assign(Heading, { displayName: 'Heading' });
