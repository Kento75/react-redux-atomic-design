import React from 'react';
import { action } from '@storybook/addon-actions';
import MailAuthForm from './index.js';

export default stories => stories
  .add('デフォルト', () => (
    <MailAuthForm onClick={ action('送信ボタンがクリックされました') } />
  ));
