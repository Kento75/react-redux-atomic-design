import React from 'react';
import PageHeader from './index.js';

const navigations = [
  { label: 'トップ', url: '#' },
  { label: '通知番組', url: '#' },
];

export default stories => stories
  .add('デフォルト', () => (
    <PageHeader navigations={ navigations } />
  ));
