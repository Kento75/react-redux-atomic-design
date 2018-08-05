import React from 'react';
import Menu from './index.js';
import { channels } from '../../../mock/data.js';

export default stories => stories
  .add('デフォルト', () => <Menu heading="メニュー見出し">{ channels }</Menu>);
