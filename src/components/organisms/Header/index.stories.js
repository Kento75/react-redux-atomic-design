import React from 'react';
import Header from './index.js';

const navigations = [
  { label: 'ホーム', url: '#' },
  { label: '番組表', url: '#' },
  { label: '通知番組', url: '#', current: true },
  { label: 'お知らせ', url: '#' },
  { label: '設定', url: '#' },
];

export default stories => stories
  .add('デフォルト', () => (
    <Header navigations={ navigations } />
  ));
