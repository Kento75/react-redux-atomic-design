import React from 'react';
import { action } from '@storybook/addon-actions'
import NotificationListTemplate from './index.js';
import {
  notifications,
  navigations,
  breadcrumb,
} from '../../../mock/data.js';

export default stories => stories
  .add('デフォルト', () => {
    return (
      <NotificationListTemplate
        notifications={ notifications }
        navigations={ navigations }
        breadcrumb={ breadcrumb }
        onClickDeleteNotification={ action('削除ボタンがクリックされました') }
      />
    );
  });
