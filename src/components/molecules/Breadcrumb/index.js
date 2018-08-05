import React from 'react';
import styles from './styles.css';
import Anchor from '../../atoms/Anchor/index.js';
import { LinkTxt } from '../../atoms/Txt/index.js';

const defaultItems = [];

const Breadcrumb = ({ items = defaultItems }) => (
  <ul className={ styles.root }>
    { items.map((item, idx) => (
      <li key={ idx } className={ styles.item }>{
        items.length - 1 > idx ? <Anchor href={ item.url }><LinkTxt size="s">{ item.label }</LinkTxt></Anchor> : <span>{ item.label }</span>
      }</li>
    )) }
  </ul>
);
export default Breadcrumb;
