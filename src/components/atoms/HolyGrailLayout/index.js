import React from 'react';
import styles from './styles.css';
import { containPresenter } from '../../utils/HoC.js';

const HolyGrailLayoutPresenter = ({ tag:Tag = 'div', parts, className, ...props }) => {
  const { top, bottom, main, left, right } = parts;
  return (
    <Tag className={[ styles.root, className ].join(' ')}>
      { top }
      <div className={styles.body}>
        { main }
        { left }
        { right }
      </div>
      { bottom }
    </Tag>
  );
};

const HolyGrailLayoutContainer = ({ presenter, children, ...props }) => {
  const parts = mapParts(children);
  return presenter({ parts, ...props });
};

const partTypes = [
  'HolyGrailTop',
  'HolyGrailBottom',
  'HolyGrailMain',
  'HolyGrailLeft',
  'HolyGrailRight',
];

function mapParts(elems) {
  const parts = [];
  elems.map(elem => {
    const idx = partTypes.indexOf(elem.type.displayName);
    if (!~idx) return;
    parts[idx] = elem.props.children;
  });
  const [ top, bottom, main, left, right ] = parts;
  return { top, bottom, main, left, right };
}

const HolyGrailLayout = containPresenter(HolyGrailLayoutContainer, HolyGrailLayoutPresenter);
export default HolyGrailLayout;

export const HolyGrailTop = () => <div>これはレンダリングされないもの</div>;
export const HolyGrailBottom = () => <div>これはレンダリングされないもの</div>;
export const HolyGrailMain = () => <div>これはレンダリングされないもの</div>;
export const HolyGrailLeft = () => <div>これはレンダリングされないもの</div>;
export const HolyGrailRight = () => <div>これはレンダリングされないもの</div>;
