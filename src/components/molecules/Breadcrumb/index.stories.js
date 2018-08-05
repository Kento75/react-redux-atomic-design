import React from 'react';
import { action } from '@storybook/addon-actions'
import Breadcrumb from './index.js';

const items = [
  { label: 'トップ', url: '#' },
  { label: '通知番組', url: '#' },
];

export default stories => stories
  .add('デフォルト', () => (
    <Breadcrumb items={ items } />
  ));
