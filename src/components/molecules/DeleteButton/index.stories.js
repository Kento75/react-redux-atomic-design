import React from 'react';
import { action } from '@storybook/addon-actions';
import DeleteButton from './index.js';
import { withStyle } from '../../utils/decorators.js';

export default stories => stories
  .add('デフォルト', () => withStyle({ margin: '50px' })(
    <DeleteButton onClick={ action('削除ボタンがクリックされました') } />
  ));
