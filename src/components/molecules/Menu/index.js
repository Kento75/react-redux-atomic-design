import React from 'react';
import styles from './styles.css';
import { HeadingOutlined } from '../../atoms/Heading/index.js';
import Txt from '../../atoms/Txt/index.js';
import Card, { CardHeader } from '../../atoms/Card/index.js';

const Menu = ({ tag = 'section', heading, children = [], ...props }) => (
  <Card tag={ tag } { ...props }>
    <CardHeader>
      <HeadingOutlined level="6">{ heading }</HeadingOutlined>
    </CardHeader>
    <ul className={ styles.list }>
      { children.map((item, idx) => (
        <li key={ idx } className={ styles.item }>
          <a className={ styles.link } href={ item.url }><Txt tag="span" size="s">{ item.label }</Txt></a>
        </li>
      )) }
    </ul>
  </Card>
);
export default Menu;
