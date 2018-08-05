import React from 'react';
import Navigation from './index.js';
import { withStyle } from '../../utils/decorators.js';

const items = [
  { label: 'ホーム', url: '#' },
  { label: '番組表', url: '#' },
  { label: '通知番組', url: '#', current: true },
  { label: 'お知らせ', url: '#' },
  { label: '設定', url: '#' },
];

export default stories => stories
  .add('デフォルト', () => withStyle({ backgroundColor: 'black', padding: '1rem' })(
    <Navigation items={ items } />
  ));
